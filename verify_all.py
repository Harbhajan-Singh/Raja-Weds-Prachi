import urllib.request
import json
import time

BASE_URL = 'http://localhost:3000'
results = []

def test_url(endpoint, desc, expected_status=200, check_contents=[], forbidden_contents=[]):
    url = f"{BASE_URL}{endpoint}"
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, timeout=10) as res:
            status = res.status
            body = res.read().decode('utf-8', errors='ignore')
            passed = (status == expected_status)
            missing = []
            found_forbidden = []
            for c in check_contents:
                if c not in body:
                    passed = False
                    missing.append(c)
            for f in forbidden_contents:
                if f in body:
                    passed = False
                    found_forbidden.append(f)
            if passed:
                results.append((desc, True, f"Status {status}, verified: {', '.join(check_contents) if check_contents else 'OK'}"))
            else:
                results.append((desc, False, f"Missing: {missing}, Found forbidden: {found_forbidden} (Status {status})"))
    except Exception as e:
        results.append((desc, False, str(e)))

# 1. Routes and Content
forbidden_common = ['Your Blessing', 'id="register"', 'Pheras', 'Timelessly Traditional', 'Dress code']

test_url('/', 'Home Page (/)', 200, ['Raja', 'Prachi', 'Satsang', 'Engagement', 'Ladies Sangeet', 'Haldi', 'The Wedding', 'Our Moments', 'Digital', 'digitaldarzee.com'], forbidden_contents=forbidden_common)
test_url('/wedding', 'Wedding Page (/wedding)', 200, [
    'Raja', 'Prachi', 'Whistling Woods Resort', 'Daljit Nagar', 'Sehra Bandhi',
    'id="w-satsang"', '/v5/assets/bg/b1.webp',
    'id="w-engagement"', '/v5/assets/bg/b3.webp',
    'id="w-sangeet"', '/v5/assets/bg/b1.webp',
    'id="w-haldi"', '/v5/assets/bg/b2.webp',
    'id="w-wedding"', '/v5/assets/bg/b4.webp',
    'maps/dir/?api=1&amp;destination=',
    '30.888012,75.772102',
    'Our Moments',
    'Digital',
    'digitaldarzee.com'
], forbidden_contents=forbidden_common)
test_url('/sangeet', 'Sangeet Page (/sangeet)', 200, ['Ladies Sangeet', 'Raja', 'Prachi', '/v5/assets/bg/b1.webp', 'Digital', 'digitaldarzee.com'], forbidden_contents=['Your Blessing', 'id="register"'])

# 2. Key Interactive Assets
test_url('/v5/css/style.css', 'Stylesheet (style.css)', 200)
test_url('/v5/js/main.js', 'Core JS Engine (main.js)', 200)
test_url('/v5/assets/audio/m.mp3', 'Wedding Music (m.mp3)', 200)
test_url('/v5/assets/env/f_0000.webp', 'Envelope Animation (Frame 0)', 200)
test_url('/v5/assets/env/f_0095.webp', 'Envelope Animation (Frame 95)', 200)
test_url('/v5/assets/art/courtyard.webp', 'Haveli Courtyard Artwork', 200)
test_url('/v5/assets/couple/walk.webp', 'Couple Walking Artwork', 200)
test_url('/v5/assets/couple/dip.webp', 'Couple Dance Dip Artwork', 200)
test_url('/v5/assets/photos/moment1.webp', 'Gallery Photo 1 (moment1.webp)', 200)
test_url('/v5/assets/photos/moment2.webp', 'Gallery Photo 2 (moment2.webp)', 200)

# 3. RSVP API Route
try:
    payload = json.dumps({
        'name': 'Gaurav Kapoor',
        'phone': '+91 9876500000',
        'group': 'wedding',
        'answers': {
            'satsang': 'yes',
            'engagement': 'yes',
            'sangeet': 'yes',
            'haldi': 'yes',
            'wedding': 'yes'
        },
        'guests': 3,
        'note': 'Heartiest congratulations to Raja & Prachi!'
    }).encode('utf-8')
    
    req = urllib.request.Request(f"{BASE_URL}/api/rsvp", data=payload, headers={'Content-Type': 'application/json'})
    with urllib.request.urlopen(req, timeout=10) as res:
        res_data = json.loads(res.read().decode('utf-8'))
        ok = (res.status == 200 and res_data.get('ok') is True)
        results.append(('RSVP API Handler (POST /api/rsvp)', ok, f"Status {res.status}, Response: {res_data}"))
except Exception as e:
    results.append(('RSVP API Handler (POST /api/rsvp)', False, str(e)))

# 4. Check rsvps.json persistence
try:
    with open('rsvps.json', 'r', encoding='utf-8') as f:
        rsvps = json.load(f)
    found = any(r.get('name') == 'Gaurav Kapoor' for r in rsvps)
    results.append(('RSVP File Persistence (rsvps.json)', found, f"Total saved RSVPs: {len(rsvps)}"))
except Exception as e:
    results.append(('RSVP File Persistence (rsvps.json)', False, str(e)))

print("=" * 70)
print("              RAJA & PRACHI WEDDING SITE VERIFICATION")
print("=" * 70)
all_ok = True
for name, passed, detail in results:
    status_str = "[PASS]" if passed else "[FAIL]"
    if not passed:
        all_ok = False
    print(f"{status_str} {name:40} : {detail}")
print("=" * 70)
print(f"Final Result: {'>>> ALL 14/14 CHECKS PASSED <<<' if all_ok else 'SOME CHECKS FAILED'}")
print("=" * 70)

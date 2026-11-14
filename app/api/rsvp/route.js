import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request) {
  try {
    const data = await request.json();
    data.received_at = new Date().toISOString();

    try {
      const rsvpFile = path.join(process.cwd(), 'rsvps.json');
      let rsvps = [];
      if (fs.existsSync(rsvpFile)) {
        try {
          rsvps = JSON.parse(fs.readFileSync(rsvpFile, 'utf8'));
        } catch {
          rsvps = [];
        }
      }
      rsvps.push(data);
      fs.writeFileSync(rsvpFile, JSON.stringify(rsvps, null, 2), 'utf8');
    } catch (fsErr) {
      console.warn('File write note (e.g. serverless read-only):', fsErr.message);
    }

    console.log(`[RSVP API] Registered RSVP for: ${data.name || 'Anonymous'}`);
    return NextResponse.json({ ok: true, message: 'RSVP recorded successfully' });
  } catch (error) {
    return NextResponse.json({ ok: false, error: error.message }, { status: 400 });
  }
}


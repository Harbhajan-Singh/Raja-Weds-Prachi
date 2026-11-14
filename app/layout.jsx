import './globals.css';

export const metadata = {
  metadataBase: new URL('https://raja-prachi-wedding.vercel.app'),
  title: 'Raja & Prachi · You’re invited to the Wedding Celebrations',
  description: 'Saturday, 5 December 2026 · Whistling Woods Resort, Ludhiana',
  icons: {
    icon: '/v5/assets/img/favicon.png',
  },
  openGraph: {
    type: 'website',
    siteName: 'Raja & Prachi Wedding',
    title: 'Raja & Prachi · You’re invited to the Wedding Celebrations',
    description: 'Saturday, 5 December 2026 · Whistling Woods Resort, Ludhiana',
    url: 'https://raja-prachi-wedding.vercel.app/wedding',
    images: [
      {
        url: '/v5/assets/og-wedding.jpg',
        width: 1200,
        height: 630,
      },
    ],
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#FAF6EF',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Pinyon+Script&family=Tinos:ital,wght@0,400;0,700;1,400&family=Tiro+Devanagari+Hindi&display=swap"
        />
        <link rel="stylesheet" href="/v5/css/style.css?v=9" />
      </head>
      <body className="locked">
        {children}
      </body>
    </html>
  );
}

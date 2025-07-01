import './globals.css';
import type { Metadata } from 'next';
import { Inter, IBM_Plex_Sans, Poppins, Bodoni_Moda } from 'next/font/google';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { Toaster } from '@/components/ui/sonner';

// Load Google Fonts using next/font/google
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const ibmPlexSans = IBM_Plex_Sans({ 
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-ibm-plex-sans',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

const bodoni = Bodoni_Moda({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-bodoni',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'DOMS Global - Transforming Ideas into Impact',
  description: 'DOMS Global is a leading innovation company transforming today\'s ideas into tomorrow\'s impact through cutting-edge solutions and professional excellence.',
  keywords: 'innovation, technology, consulting, digital transformation, business solutions',
  authors: [{ name: 'DOMS Global' }],
  creator: 'DOMS Global',
  publisher: 'DOMS Global',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://domsglobal.com',
    title: 'DOMS Global - Transforming Ideas into Impact',
    description: 'Leading innovation company transforming today\'s ideas into tomorrow\'s impact through cutting-edge solutions.',
    siteName: 'DOMS Global',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DOMS Global - Transforming Ideas into Impact',
    description: 'Leading innovation company transforming today\'s ideas into tomorrow\'s impact.',
    creator: '@domsglobal',
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://domsglobal.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${ibmPlexSans.variable} ${poppins.variable} ${bodoni.variable}`}
    >
      <body className="font-body antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}

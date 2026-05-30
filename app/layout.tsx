import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Sorn Sophamarinet | DevOps Engineer',
  description: 'DevOps Engineer specializing in Docker, Kubernetes, CI/CD, cloud deployment, and modern web technologies. Fresh graduate from Royal University of Phnom Penh.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/marinet-logo.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/marinet-logo.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/marinet-logo.png',
        type: 'image/png',
      },
    ],
    apple: '/marinet-logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}

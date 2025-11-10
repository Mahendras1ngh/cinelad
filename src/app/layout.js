import './globals.css'

export const metadata = {
  title: 'Cinelad - Creative Content That Stops The Scroll',
  description: 'We create viral-worthy brand content that transforms your social media presence. UGC, reels, and content strategies that drive real results.',
  keywords: 'content creation, social media reels, UGC, viral marketing, brand content, social media strategy',
  authors: [{ name: 'Cinelad Team' }],
  openGraph: {
    title: 'Cinelad - Creative Content That Stops The Scroll',
    description: 'We create viral-worthy brand content that transforms your social media presence and drives real business results.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
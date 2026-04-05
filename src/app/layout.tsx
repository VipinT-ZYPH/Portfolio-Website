import '../styles/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Vipin Thingalaya - AI/ML Engineer & Full-Stack Developer',
  description: 'Portfolio of Vipin Thingalaya - An AI/ML engineer and full-stack developer. Specializing in FastAPI, TensorFlow, and modern web technologies.',
  keywords: ['AI/ML Engineer', 'Full-Stack Developer', 'FastAPI', 'TensorFlow', 'Machine Learning', 'Python', 'Web Development'],
  author: 'Vipin Thingalaya',
  openGraph: {
    title: 'Vipin Thingalaya - AI/ML Engineer & Full-Stack Developer',
    description: 'Portfolio of Vipin Thingalaya - An AI/ML engineer and full-stack developer.',
    type: 'website',
    url: 'https://vipin-portfolio.vercel.app',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Vipin Thingalaya Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vipin Thingalaya - AI/ML Engineer & Full-Stack Developer',
    description: 'Portfolio of Vipin Thingalaya - An AI/ML engineer and full-stack developer.',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}

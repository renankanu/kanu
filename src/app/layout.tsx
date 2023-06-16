import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import FramerMotionProvider from '@/providers/FramerMotionProvider'
import {
  Bai_Jamjuree as BaiJamjuree,
  JetBrains_Mono as JetBrainsMono,
  Roboto_Flex as Roboto,
} from 'next/font/google'
import { ReactNode } from 'react'
import './globals.css'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })
const baiJamjuree = BaiJamjuree({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-bai-jamjuree',
})
const jetBrainsMono = JetBrainsMono({
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata = {
  title: 'RenanKanu;',
  description: 'Renan Kanu is a software engineer based in Brazil.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${roboto.variable} ${baiJamjuree.variable} ${jetBrainsMono.variable}`}
      >
        <FramerMotionProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </FramerMotionProvider>
      </body>
    </html>
  )
}

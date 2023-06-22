import Head from '@/components/meta/Head'
import GlobalProvider from '@/providers'
import {
  Bai_Jamjuree as BaiJamjuree,
  JetBrains_Mono as JetBrainsMono,
  Plus_Jakarta_Sans as PlusJakartaSans,
  Raleway,
} from 'next/font/google'
import { ReactNode } from 'react'
import './globals.css'

const plusJakartaSans = PlusJakartaSans({
  subsets: ['latin'],
  variable: '--font-sans',
})
const baiJamjuree = BaiJamjuree({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-alt',
})
const jetBrainsMono = JetBrainsMono({
  subsets: ['latin'],
  variable: '--font-mono',
})
const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-body',
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Head />
      <html lang="en" className="dark">
        <body
          className={`${plusJakartaSans.variable} ${baiJamjuree.variable} ${jetBrainsMono.variable} ${raleway.variable}`}
        >
          <GlobalProvider>{children}</GlobalProvider>
        </body>
      </html>
    </>
  )
}

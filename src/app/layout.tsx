import GlobalProvider from '@/providers'
import { Metadata } from 'next'
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

export const metadata: Metadata = {
  title: 'RenanKanu;',
  description:
    'Portfólio de Renan Santos com seus projetos, trabalhos e experiências. Navegue pelo site e conheça mais sobre o desenvolvedor.',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://kanu-beta.vercel.app/',
    title: 'RenanKanu;',
    description:
      'Portfólio de Renan Santos com seus projetos, trabalhos e experiências. Navegue pelo site e conheça mais sobre o desenvolvedor.',
    images: [
      {
        url: 'https://kanu-beta.vercel.app/assets/kanu_purple.png',
        width: 630,
        height: 630,
        alt: 'Renan Kanu',
      },
    ],
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
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

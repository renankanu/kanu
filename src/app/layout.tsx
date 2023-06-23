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

export const metadata = {
  title: 'RenanKanu;',
  description:
    'Portfólio de Renan Santos com seus projetos, trabalhos e experiências. Navegue pelo site e conheça mais sobre o desenvolvedor.',
  alternates: {
    canonical: 'https://www.renankanu.com.br',
  },
  category: 'technology',
  colorScheme: 'dark',
  keywords: ['renan', 'kanu', 'renankanu', 'renan kanu', 'flutter', 'dart'],
  creator: 'Renan Santos de Oliveira',
  publisher: 'Renan Santos de Oliveira',
  icon: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'RenanKanu;',
    description:
      'Portfólio de Renan Santos com seus projetos, trabalhos e experiências. Navegue pelo site e conheça mais sobre o desenvolvedor.',
    url: 'https://www.renankanu.com.br',
    siteName: 'Next.js',
    images: [
      {
        url: 'https://www.renankanu.com.br/assets/kanu_purple.png',
        width: 600,
        height: 600,
      },
    ],
    locale: 'pt_BR',
    type: 'website',
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

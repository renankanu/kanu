import { PropsWithChildren } from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'

export default function BaseLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

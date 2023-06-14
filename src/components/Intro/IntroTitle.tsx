'use client'
import { m } from 'framer-motion'

const animation = {
  hidden: { x: -32, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
  },
}

export default function IntroTitle() {
  return (
    <m.div
      className="mb-4 flex items-center justify-center align-middle font-alt text-[2.5rem] font-[1000] leading-none md:mb-6 md:text-7xl"
      initial={animation.hidden}
      animate={animation.show}
      transition={{ duration: 0.1 }}
    >
      Renan Santos
    </m.div>
  )
}

'use client'
import { m } from 'framer-motion'

const animation = {
  hide: { x: -32, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
  },
}

export default function IntroTitle() {
  return (
    <div>
      <span className="dark:text-slate-300 sm:text-center md:text-center">
        <m.span
          className="block text-[2.5rem] font-[1000] leading-none lg:text-7xl xl:text-7xl "
          initial={animation.hide}
          animate={animation.show}
          transition={{ delay: 0.1 }}
        >
          Renan Santos
        </m.span>
        <m.span
          className="mb-8 block text-base dark:text-slate-400"
          initial={animation.hide}
          animate={animation.show}
          transition={{ delay: 0.2 }}
        >
          Conhecido como Kanu
        </m.span>
        <m.span
          className="mb-4 block text-base  dark:text-slate-400 md:text-xl"
          initial={animation.hide}
          animate={animation.show}
          transition={{ delay: 0.3 }}
        >
          <strong className="font-mono text-[1.5rem] font-bold dark:text-slate-300 lg:text-3xl xl:text-3xl">
            Desenvolvedor Mobile
          </strong>
        </m.span>
        <m.span
          className="block font-mono text-base dark:text-slate-400 lg:text-xl xl:text-xl"
          initial={animation.hide}
          animate={animation.show}
          transition={{ delay: 0.3 }}
        >
          Com um toque de criatividade e muita linha de código, transformando
          ideias em soluções desde 2015.
        </m.span>
      </span>
    </div>
  )
}

'use client'
import { m } from 'framer-motion'

const animation = {
  hide: { x: -32, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
  },
}

export default function IntroIdiom() {
  return (
    <div>
      <m.p
        className="mb-1 mt-4 font-mono text-sm dark:text-slate-400 sm:text-center md:text-center"
        initial={animation.hide}
        animate={animation.show}
        transition={{ delay: 0.6 }}
      >
        Idiomas:
      </m.p>
      <m.ul
        className="gap-3 text-slate-500 dark:text-slate-500 sm:justify-center md:justify-center"
        initial="hide"
        animate="show"
        transition={{ delayChildren: 0.6, staggerChildren: 0.025 }}
      >
        <m.li variants={animation}>
          <div className="flex transition duration-200 hover:text-primary-500">
            <span className="text-lg">🇧🇷</span>
            <span className="text-base">&nbsp; Portugues - Fluente </span>
          </div>
        </m.li>
        <m.li variants={animation}>
          <div className="transition duration-200 hover:text-primary-500">
            <span className="text-lg">🇺🇸</span>
            <span className="text-base">&nbsp; Inglês - Tecnico</span>
          </div>
        </m.li>
      </m.ul>
    </div>
  )
}

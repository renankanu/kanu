'use client'
import { m } from 'framer-motion'

import {
  DartIcon,
  FlutterIcon,
  ReactIcon,
  TypeScriptIcon,
  VSCodeIcon,
} from '@/components/Icons'

const animation = {
  hide: { x: -8, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
  },
}

export default function IntroTechStack() {
  return (
    <div>
      <m.p
        className="mb-2.5 mt-36 font-mono text-sm dark:text-slate-400"
        initial={animation.hide}
        animate={animation.show}
        transition={{ delay: 0.6 }}
      >
        atual e mais usada stack/ferramentas:
      </m.p>
      <m.ul
        className="flex items-center gap-3.5 text-slate-500 dark:text-slate-500"
        initial="hide"
        animate="show"
        transition={{ delayChildren: 0.6, staggerChildren: 0.025 }}
      >
        <m.li variants={animation}>
          <div className="transition duration-200 hover:text-accent-label">
            <FlutterIcon className="h-6 w-6" />
          </div>
        </m.li>
        <m.li variants={animation}>
          <div className="transition duration-200 hover:text-accent-label">
            <ReactIcon className="h-6 w-6" />
          </div>
        </m.li>
        <m.li variants={animation}>
          <div className="transition duration-200 hover:text-accent-label">
            <DartIcon className="h-6 w-6" />
          </div>
        </m.li>
        <m.li variants={animation}>
          <div className="transition duration-200 hover:text-accent-label">
            <TypeScriptIcon className="h-6 w-6" />
          </div>
        </m.li>
        <m.li variants={animation}>
          <div className="h-3 w-[1px] bg-slate-300 dark:bg-accent-label" />
        </m.li>
        <m.li variants={animation}>
          <div className="transition duration-200 hover:text-accent-label">
            <VSCodeIcon className="h-6 w-6" />
          </div>
        </m.li>
      </m.ul>
    </div>
  )
}

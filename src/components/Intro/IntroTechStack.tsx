'use client'
import { m } from 'framer-motion'

import {
  DartIcon,
  FirebaseIcon,
  FlutterIcon,
  GitIcon,
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
        className="mb-2.5 mt-16 font-mono text-sm dark:text-slate-400 sm:text-center md:text-center"
        initial={animation.hide}
        animate={animation.show}
        transition={{ delay: 0.6 }}
      >
        Stacks e ferramentas usada atualmente:
      </m.p>
      <m.ul
        className="flex items-center gap-3.5 text-slate-500 dark:text-slate-500 sm:justify-center md:justify-center"
        initial="hide"
        animate="show"
        transition={{ delayChildren: 0.6, staggerChildren: 0.025 }}
      >
        <m.li variants={animation}>
          <div className="transition duration-200 hover:text-primary-500">
            <FlutterIcon className="h-6 w-6" />
          </div>
        </m.li>
        <m.li variants={animation}>
          <div className="transition duration-200 hover:text-primary-500">
            <DartIcon className="h-6 w-6" />
          </div>
        </m.li>
        <m.li variants={animation}>
          <div className="transition duration-200 hover:text-primary-500">
            <ReactIcon className="h-6 w-6" />
          </div>
        </m.li>
        <m.li variants={animation}>
          <div className="transition duration-200 hover:text-primary-500">
            <TypeScriptIcon className="h-6 w-6" />
          </div>
        </m.li>
        <m.li variants={animation}>
          <div className="h-3 w-[1px] bg-slate-300 dark:bg-primary-500" />
        </m.li>
        <m.li variants={animation}>
          <div className="transition duration-200 hover:text-primary-500">
            <VSCodeIcon className="h-6 w-6" />
          </div>
        </m.li>
        <m.li variants={animation}>
          <div className="transition duration-200 hover:text-primary-500">
            <GitIcon className="h-6 w-6" />
          </div>
        </m.li>
        <m.li variants={animation}>
          <div className="transition duration-200 hover:text-primary-500">
            <FirebaseIcon className="h-6 w-6" />
          </div>
        </m.li>
      </m.ul>
    </div>
  )
}

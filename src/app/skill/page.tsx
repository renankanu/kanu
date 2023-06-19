'use client'
import BaseLayout from '@/components/BaseLayout'
import { m } from 'framer-motion'
import Config from './components/configs.mdx'

const animation = {
  hide: { x: -32, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
  },
}

export default function Skill() {
  return (
    <BaseLayout>
      <div className="background-grid background-grid--fade-out pb-20 pt-36 xl:pb-28 xl:pt-52">
        <div className="content-wrapper">
          <m.p
            className="mb-16 block font-alt leading-none dark:text-cornflower-blue-500 sm:text-3xl md:text-5xl lg:text-7xl xl:text-7xl"
            initial={animation.hide}
            animate={animation.show}
            transition={{ delay: 0.1 }}
          >
            Skills & Ferramentas
          </m.p>
          <m.p
            className="mb-8 block font-body text-xl font-bold leading-relaxed text-slate-300"
            initial={animation.hide}
            animate={animation.show}
            transition={{ delay: 0.2 }}
          >
            Aqui estão algumas das Linguagens de Programação/Frameworks,
            Ferramentas e Config que eu uso e gosto de trabalhar.
          </m.p>
          <p className="mb-2 font-body font-medium text-slate-300">
            Entrei no mundo da programação á{' '}
            <strong>{new Date().getFullYear() - 2016} anos atrás</strong>,
            comecei com <strong>Back-end</strong> e <strong>Mobile</strong> com{' '}
            <strong>Java</strong>.
          </p>
          <p className="mb-2 font-body font-medium text-slate-300">
            Depois de um tempo comecei a trabalhar com PHP no back-end, AWS,
            Docker. E no mobile com <strong>Kotlin</strong>.
          </p>
          <p className="mb-2 font-body font-medium text-slate-300">
            Atualmente estou trabalhando com <strong>Flutter</strong> e{' '}
            <strong>React Native</strong> no mobile.
          </p>
          <h1 className="mb-2 mt-16 font-body text-3xl font-black text-slate-300">
            Linguagens de Programação/Frameworks
          </h1>
          <div className="content-wrapper mt-6 flex-shrink-0 overflow-hidden lg:overflow-visible">
            <div className="flex flex-row gap-8">
              <div className="block border-l border-divider-light dark:border-divider-dark" />
              <div
                className="mdx-contents min-w-0 flex-1 scroll-mt-[86px]"
                id="main-contents"
                data-ss-wrapper
              >
                <Config />
              </div>
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  )
}

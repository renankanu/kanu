'use client'
import BaseLayout from '@/components/BaseLayout'
import Divider from '@/components/Divider'
import { m } from 'framer-motion'
import Config from './components/configs.mdx'

const animation = {
  hide: { x: -32, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
  },
}

export default function Configuration() {
  return (
    <BaseLayout>
      <div className="background-grid background-grid--fade-out pb-20 pt-36">
        <div className="content-wrapper">
          <m.p
            className="mb-16 block font-alt leading-none dark:text-primary-500 sm:text-3xl md:text-5xl lg:text-7xl xl:text-7xl"
            initial={animation.hide}
            animate={animation.show}
            transition={{ delay: 0.1 }}
          >
            Configurações
          </m.p>
          <m.p
            className="mb-8 block font-body text-xl font-medium leading-relaxed text-slate-300 sm:text-sm"
            initial={animation.hide}
            animate={animation.show}
            transition={{ delay: 0.2 }}
          >
            Essas são algumas das configurações que eu uso e gosto de trabalhar,
            que me ajudam a ser mais produtivo e um pouco de estilo. Atualmente
            estou usando o <strong>MacOs</strong> como sistema operacional.
          </m.p>
          <Divider />
          <div className="mt-6 flex-shrink-0 overflow-hidden lg:overflow-visible">
            <div className="flex flex-row gap-8">
              <div className="block border-l border-divider-light dark:border-divider-dark sm:hidden" />
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

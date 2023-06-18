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
          <span className="dark:text-cornflower-blue-500">
            <m.span
              className="mb-4 block font-alt leading-none sm:text-3xl md:text-5xl lg:mb-6 lg:text-7xl xl:mb-6 xl:text-7xl"
              initial={animation.hide}
              animate={animation.show}
              transition={{ delay: 0.1 }}
            >
              Skills & Ferramentas
            </m.span>
          </span>
          <code className="language-html">{`<p>teste</p>`}</code>
          <div className="content-wrapper flex-shrink-0 overflow-hidden lg:overflow-visible">
            <div className="flex flex-row-reverse gap-8 xl:gap-24">
              <div
                className="mdx-contents min-w-0 flex-1 scroll-mt-[86px]"
                id="main-contents"
                data-ss-wrapper
              >
                <Config />
              </div>
              <div className="border-divider-light dark:border-divider-dark block border-l" />
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  )
}

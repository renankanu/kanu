'use client'
import BaseLayout from '@/components/BaseLayout'
import Divider from '@/components/Divider'
import { GitIcon } from '@/components/Icons'
import { m } from 'framer-motion'
import { SectionButton } from './components/SectionButton'

const animation = {
  hide: { x: -32, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
  },
}

export default function Projects() {
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
            Meus Projetos
          </m.p>
          <m.p
            className="mb-8 block font-body text-xl font-bold leading-relaxed text-slate-300 sm:text-sm"
            initial={animation.hide}
            animate={animation.show}
            transition={{ delay: 0.2 }}
          >
            Aqui estão alguns dos meus projetos que eu desenvolvi, alguns deles
            estão no meu{' '}
            <a
              href="https://github.com/renankanu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-500 hover:underline"
            >
              GitHub
            </a>
          </m.p>
          <Divider />
          <SectionButton
            title="Available on GitHub"
            icon={<GitIcon className="my-2 h-16 w-16" />}
            description="Access powerful and flexible package on GitHub with MIT license."
            active={true}
            onClick={() => {}}
          />
          <SectionButton
            title="Available on GitHub"
            icon={<GitIcon className="my-2 h-16 w-16" />}
            description="Access powerful and flexible package on GitHub with MIT license."
            active={true}
            onClick={() => {}}
          />
          <SectionButton
            title="Available on GitHub"
            icon={<GitIcon className="my-2 h-16 w-16" />}
            description="Access powerful and flexible package on GitHub with MIT license."
            active={true}
            onClick={() => {}}
          />
        </div>
      </div>
    </BaseLayout>
  )
}

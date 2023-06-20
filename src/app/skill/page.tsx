'use client'
import BaseLayout from '@/components/BaseLayout'
import Divider from '@/components/Divider'
import {
  DartIcon,
  FlutterIcon,
  JavaScriptIcon,
  PlusIcon,
  ReactIcon,
  TypeScriptIcon,
} from '@/components/Icons'
import Paragraph from '@/components/Paragraph'
import { m } from 'framer-motion'
import LanguageTitle from './components/LanguageTitle'
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
            className="mb-16 block font-alt leading-none dark:text-primary-500 sm:text-3xl md:text-5xl lg:text-7xl xl:text-7xl"
            initial={animation.hide}
            animate={animation.show}
            transition={{ delay: 0.1 }}
          >
            Skills & Ferramentas
          </m.p>
          <m.p
            className="mb-8 block font-body text-xl font-bold leading-relaxed text-slate-300 sm:text-sm"
            initial={animation.hide}
            animate={animation.show}
            transition={{ delay: 0.2 }}
          >
            Aqui estão algumas das Linguagens de Programação/Frameworks,
            Ferramentas e Config que eu uso e gosto de trabalhar.
          </m.p>
          <p className="mb-2 font-body font-medium text-slate-300 sm:text-sm">
            Entrei no mundo da programação á{' '}
            <strong>{new Date().getFullYear() - 2016} anos atrás</strong>,
            comecei com <strong>Back-end</strong> e <strong>Mobile</strong> com{' '}
            <strong>Java</strong>.
          </p>
          <p className="mb-2 font-body font-medium text-slate-300 sm:text-sm">
            Depois de um tempo comecei a trabalhar com PHP no back-end, AWS,
            Docker. E no mobile com <strong>Kotlin</strong>.
          </p>
          <p className="mb-2 font-body font-medium text-slate-300 sm:text-sm">
            Atualmente estou trabalhando com <strong>Flutter</strong> e{' '}
            <strong>React Native</strong> no mobile.
          </p>
          <p className="mb-2 font-body font-medium text-slate-300 sm:text-sm">
            Mas com certeza, o que eu mais gosto de trabalhar é com{' '}
            <strong className="text-primary-400">Flutter</strong>.
          </p>
          <h1 className="mb-4 mt-16 font-body text-3xl font-black text-slate-300 sm:text-xl">
            Linguagens de Programação/Frameworks
          </h1>
          <LanguageTitle>
            <FlutterIcon className="mr-2 h-6 w-6" fill="#97A3B6" />
            Flutter
          </LanguageTitle>
          <Paragraph>
            Atuando com Flutter desde 2020, desenvolvimento de UI responsiva,
            integração de recursos nativos, gerenciamento de estado(
            <strong>Bloc</strong>, <strong>GetX</strong>), conexão com APIs,
            testes e depuração, publicação de aplicativos, testes unitários e
            arquitetura limpa.
          </Paragraph>
          <Divider />
          <LanguageTitle>
            <DartIcon className="mr-2 h-6 w-6" fill="#97A3B6" />
            Dart
          </LanguageTitle>
          <Paragraph>
            Desenvolvimento de aplicativos, POO, manipulação de dados, testes e
            depuração, programação assíncrona.
          </Paragraph>
          <Divider />
          <LanguageTitle>
            <ReactIcon className="mr-2 h-6 w-6" fill="#97A3B6" />
            React Native
          </LanguageTitle>
          <Paragraph>
            Atuando em alguns projetos com React Native, atuando em bugs e
            melhorias.
          </Paragraph>
          <Divider />
          <LanguageTitle>
            <JavaScriptIcon className="mr-2 h-6 w-6" fill="#97A3B6" />
            JavaScript
          </LanguageTitle>
          <Paragraph>
            Utilizada para desenvolvimentos de novas features, correção de bugs
            em projetos <strong>React Native </strong>já existentes.
          </Paragraph>
          <Divider />
          <LanguageTitle>
            <TypeScriptIcon className="mr-2 h-6 w-6" fill="#97A3B6" />
            TypeScript
          </LanguageTitle>
          <Paragraph>
            Conhecimento sólido na linguagem, utilização de tipagem estática,
            detecção de erros em tempo de compilação, melhoria da escalabilidade
            e manutenibilidade de projetos <strong>React Native</strong>.
          </Paragraph>
          <Divider />
          <LanguageTitle>
            <PlusIcon className="mr-2 h-6 w-6" fill="#97A3B6" />
            Outras Linguagens/Frameworks
          </LanguageTitle>
          <Paragraph>Também tenho conhecimento em:</Paragraph>
          <div className="flex flex-row flex-wrap">
            <span className="label">Java</span>
            <span className="label">Kotlin</span>
            <span className="label">PHP</span>
            <span className="label">GitActions</span>
            <span className="label">Firebase</span>
            <span className="label">Docker</span>
            <span className="label">MySql</span>
            <span className="label">AWS</span>
          </div>
          <h1 className="mb-4 mt-16 font-body text-3xl font-black text-slate-300 sm:text-xl">
            Ferramentas
          </h1>
          <div className="flex flex-row flex-wrap">
            <span className="label">VsCode</span>
            <span className="label">Android Studio</span>
            <span className="label">Xcode</span>
            <span className="label">Git</span>
            <span className="label">Github</span>
            <span className="label">Postman</span>
            <span className="label">Google Play</span>
            <span className="label">App Store</span>
            <span className="label">Figma</span>
          </div>
          <Divider />
          <h1 className="mb-4 mt-16 font-body text-3xl font-black text-slate-300 sm:text-xl">
            Config
          </h1>
          <Paragraph>
            Aqui está algumas das minhas configurações, que me ajudam no
            desenvolvimento no dia a dia.
          </Paragraph>
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

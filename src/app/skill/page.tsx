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
      <div className="background-grid background-grid--fade-out pb-20 pt-36">
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
            Atuando com Flutter desde o final de 2019, desenvolvendo aplicativos
            para Android e iOS, utilizando as melhores práticas de codificação,
            arquitetura limpa, código limpo e testes unitários. Integração
            nativas com platform channels, utilizando varios serviços do
            Firebase, CI/CD. Utilizando BLoC, GetX e Riverpod para gerenciamento
            de estado. Desenvolvimento o padrão de microfrontends, aproveitando
            a escalabilidade e manutenibilidade de projetos, utilizando
            arquiteturas como MVVM, MVC e Clean Architecture para melhorar a
            qualidade do código. Integração com APIs RESTful utilizando Dio. E
            posso ter esquecido de mencionar algo, mas estou sempre aprendendo e
            melhorando.
          </Paragraph>
          <Divider />
          <LanguageTitle>
            <DartIcon className="mr-2 h-6 w-6" fill="#97A3B6" />
            Dart
          </LanguageTitle>
          <Paragraph>
            Tentando sempre aplicar as novidades da linguagem em meus projetos,
            e melhorar a qualidade do código, utilizando tipagem estática,
            detecção de erros em tempo de compilação, melhoria da escalabilidade
            e da manutenibilidade de projetos Flutter. Além disso com o Dart, já
            criei algumas APIs RESTful utilizando o framework Shelf, o link para
            o repositório{' '}
            <a
              className="text-primary-400"
              target="_blank"
              href="https://github.com/renankanu/kn_fit_api"
              rel="noreferrer"
            >
              aqui!
            </a>
            , e também criei um CLI para facilitar a criação de novos projetos
            com uma estrutura padrão, definida pela empresa que trabalho.
          </Paragraph>
          <Divider />
          <LanguageTitle>
            <ReactIcon className="mr-2 h-6 w-6" fill="#97A3B6" />
            React Native
          </LanguageTitle>
          <Paragraph>
            Com esse framework, já atuei em projetos criado do zero, tanto com
            JavaScript quanto com TypeScript, utilizando Redux, Redux Saga,
            Context API e Hooks para gerenciamento de estado. Além disso, já
            trabalhei na manutenção de projetos já existentes, correção de bugs,
            implementação de novas features, integração com APIs RESTful. Hoje
            estou focando mais em Flutter, mas sempre que possível estou
            estudando e melhorando meus conhecimentos em React Native.
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
            A maior experiência com TypeScript foi em projetos{' '}
            <strong>React Native</strong>, escolhido pela tipagem estática, que
            ajuda a identificar erros em tempo de compilação, melhorando a
            escalabilidade e a manutenibilidade de projetos. Além disso, já
            criei uma API com Node.js, utilizando TypeScript, o link para o
            repositório{' '}
            <a
              className="text-primary-400"
              target="_blank"
              href="https://github.com/renankanu/passin-api"
              rel="noreferrer"
            >
              aqui!
            </a>
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
        </div>
      </div>
    </BaseLayout>
  )
}

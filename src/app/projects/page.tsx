'use client'
import BaseLayout from '@/components/BaseLayout'
import Divider from '@/components/Divider'
import {
  GameControlIcon,
  GithubIcon,
  KidsKaIcon,
  MotivaIcon,
} from '@/components/Icons'
import { m } from 'framer-motion'
import CardProject from './components/CardProject'

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
            Estes são alguns dos meus projetos pessoais, todos eles foram
            desenvolvidos para fins de estudo e aprendizado. Aplicando os
            conhecimentos e estudos que venho adquirindo ao longo do tempo.
          </m.p>

          <div className="flex sm:justify-center md:justify-center">
            <a
              href="https://github.com/renankanu"
              target="_blank"
              className="inline-flex items-center justify-center rounded-lg bg-gray-50 p-5 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              rel="noreferrer"
            >
              <GithubIcon className="mr-3 h-6 w-6" />
              <span className="w-full">
                Todos os projetos estão no meu GitHub
              </span>
              <svg
                aria-hidden="true"
                className="ml-3 h-6 w-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>

          <Divider />
          <div className="flex flex-row flex-wrap gap-x-8 sm:justify-center md:justify-center">
            <CardProject
              title="KIDSKA"
              icon={<KidsKaIcon className="my-2 h-24 w-24" />}
              description="Um APP para ajudar crianças a aprenderem de forma divertida com sons sobre o alfabeto, números, cores e alguns sons de animais. O APP também tem histórias infantis em áudio. Disponível para Android e em breve para iOS."
              googleUrl="https://play.google.com/store/apps/details?id=br.com.renankanu.app_kidska"
            />
            <CardProject
              title="Motivamente"
              icon={<MotivaIcon className="my-2 h-24 w-24" />}
              description="Um APP de frases motivacionais, com o objetivo de ajudar as pessoas a se sentirem melhor e mais motivadas. O APP gera frases aleatórias e também permite que o usuário compartilhe as frases. Disponível para Android e em breve para iOS."
              googleUrl="https://play.google.com/store/apps/details?id=br.com.renankanu.moti_mente"
            />
            <CardProject
              title="Portfólio modo game"
              icon={<GameControlIcon className="my-2 h-24 w-24" />}
              description="Meu portfólio em formato de jogo, com o objetivo de mostrar minhas habilidades de desenvolvimento de jogos. Feito com Flutter e Bonfire."
              externalUrl="https://me-landing-page-renankanu.vercel.app/"
            />
          </div>
        </div>
      </div>
    </BaseLayout>
  )
}

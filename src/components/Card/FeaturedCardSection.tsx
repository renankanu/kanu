'use client'
import { m } from 'framer-motion'
import FeaturedCard from './FeaturedCard'
import Image from 'next/image'

const animation = {
  hide: { x: -8, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
  },
}

export default function FeaturedCardSection() {
  return (
    <div className="content-wrapper mb-20">
      <m.p
        className="block text-[2.5rem] font-bold leading-none lg:text-3xl xl:text-3xl "
        initial={animation.hide}
        animate={animation.show}
        transition={{ delay: 0.6 }}
      >
        Sobre:
      </m.p>
      <m.p
        className="mb-8 mt-4 font-mono text-sm dark:text-slate-400 sm:text-center md:text-center"
        initial={animation.hide}
        animate={animation.show}
        transition={{ delay: 0.6 }}
      >
        Um engenheiro de software talentoso com mais de oito anos de
        experiência, meu foco principal é o desenvolvimento móvel (iOS e
        Android) com Flutter e nesse tempo, eu também trabalhei com o framework
        React Native. Minha experiência nessa área me permitiu desenvolver uma
        compreensão das complexidades do desenvolvimento de aplicativos móveis e
        entregar consistentemente resultados de alta qualidade. Ao longo da
        minha carreira, desenvolvi e publiquei com sucesso mais de 12
        aplicativos móveis.
        <br />
        <br />
        Minha maior experiência é com <b>Flutter</b>, onde tenho mais de 4 anos
        de experiência, com as melhores práticas de codificação, arquitetura
        limpa, código limpo e testes unitários. Eu também tenho experiência com
        React Native, onde trabalhei tanto com projetos novos e manutenção de
        projetos existentes. E sobre o gerenciamento de estado, tenho
        experiência com BLoC, GetX e Riverpod.
        <br />
        <br />
        Minhas habilidades incluem arquitetura(MVVM, MVC, Clean Architecture),
        Firebase, integrando APIs RESTful, CI/CD, microfrontends. Além disso,
        tenho conhecimento na arquitetura AWS, onde já trabalhei com S3, RDS,
        Lambda, SNS, SQS, Route 53, entre outros, Docker, Git, Node.js,
        TypeScript, MySQL.
        <br />
        <br />
        Gosto muito de automatizar tarefas repetitivas e criar ferramentas para
        me ajudar a ser mais produtivo, criando scripts, CLI e arquivos Makefile
        para facilitar o desenvolvimento no dia a dia.
      </m.p>
      <div className="flex flex-col gap-4 lg:flex-row lg:gap-8 xl:flex-row xl:gap-8">
        <FeaturedCard
          icon={
            <Image
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#43589C] p-2"
              src="assets/ic_search.svg"
              alt="Search icon"
              width={12}
              height={12}
            />
          }
          title="Resolução de problemas"
          desc="Habilidade de identificar e resolver problemas de forma eficiente e criativa, seja depurando código, otimizando o desempenho do aplicativo ou encontrando soluções para desafios técnicos."
        />
        <FeaturedCard
          icon={
            <Image
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#43589C] p-2"
              src="assets/ic_users.svg"
              alt="Teamwork icon"
              width={12}
              height={12}
            />
          }
          title="Trabalho em equipe"
          desc="Capacidade de colaborar harmoniosamente em equipes multidisciplinares, compartilhando conhecimento, oferecendo suporte aos colegas e contribuindo para alcançar os objetivos do projeto de forma colaborativa."
        />
        <FeaturedCard
          icon={
            <Image
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#43589C] p-2"
              src="assets/ic_category.svg"
              alt="Adaptability icon"
              width={12}
              height={12}
            />
          }
          title="Adaptabilidade"
          desc="Disposição para se adaptar a novas tecnologias, metodologias de desenvolvimento e requisitos de projeto, mantendo-se atualizado com as últimas tendências do Flutter e do mercado de desenvolvimento de aplicativos."
        />
      </div>
    </div>
  )
}

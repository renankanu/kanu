import FeaturedCard from './FeaturedCard'
import Image from 'next/image'

export default function FeaturedCardSection() {
  return (
    <div className="content-wrapper mb-20">
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
            // <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#43589C] text-[18px]">
            //   🔄
            // </div>
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

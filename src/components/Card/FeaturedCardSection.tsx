import FeaturedCard from './FeaturedCard'

export default function FeaturedCardSection() {
  return (
    <div className="content-wrapper mb-20">
      <div className="flex flex-col gap-4 lg:flex-row lg:gap-8 xl:flex-row xl:gap-8">
        <FeaturedCard
          icon={
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#43589C] text-[18px]">
              🔍
            </div>
          }
          title="Resolução de problemas"
          desc="Estou constantemente enfrentando ao criar novos projetos. Tenho uma habilidade de identificar problemas e encontrar soluções para eles."
        />
        <FeaturedCard
          icon={
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#43589C] text-[32px]">
              🤝🏾
            </div>
          }
          title="Trabalho em equipe"
          desc="Trabalhar em equipe é uma das minhas habilidades mais fortes. Eu gosto de trabalhar com pessoas que têm diferentes conjuntos de habilidades."
        />
        <FeaturedCard
          icon={
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#43589C] text-[18px]">
              🔄
            </div>
          }
          title="Adaptabilidade"
          desc="Sou uma pessoa muito adaptável. Eu posso me adaptar a qualquer ambiente e situação. Eu gosto de aprender coisas novas."
        />
      </div>
    </div>
  )
}

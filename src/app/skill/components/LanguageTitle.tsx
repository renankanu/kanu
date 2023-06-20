import { ReactNode } from 'react'

export type LanguageTitleProps = {
  icon?: ReactNode
  title: string
}

export default function LanguageTitle({ icon, title }: LanguageTitleProps) {
  return (
    <div className="mb-4 flex flex-row items-center">
      {icon}
      <h2 className="font-alt text-3xl text-slate-400">{title}</h2>
    </div>
  )
}

import { ReactNode } from 'react'

export default function LanguageTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="flex flex-row items-center font-alt text-3xl text-slate-400 sm:text-2xl">
      {children}
    </h2>
  )
}

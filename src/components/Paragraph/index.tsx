import { ReactNode } from 'react'

export default function Paragraph({ children }: { children: ReactNode }) {
  return (
    <p className="mb-2 font-body font-medium text-slate-300 sm:text-sm">
      {children}
    </p>
  )
}

import type { ReactNode } from 'react'

interface SectionButtonProps {
  title: string
  description?: string
  icon?: ReactNode
  active?: boolean
  onClick?: () => void
}

export function SectionButton({
  title,
  description = '',
  icon = null,
  active = false,
  onClick = () => {},
}: SectionButtonProps) {
  return (
    <button
      type="button"
      className={`mb-10 flex flex-1 items-center gap-4 rounded-2xl border-2 border-primary-500 bg-slate-900 px-4 py-4
        text-left
        `}
      onClick={onClick}
    >
      {icon && (
        <span
          className={`text-accent-400 hidden w-24 shrink-0 justify-center text-center text-7xl font-black xl:flex `}
        >
          {icon}
        </span>
      )}
      <span className="flex-1">
        <span className={`text-accent-600 text-accent-400 block font-bold`}>
          {title}
        </span>
        {description && (
          <span className="mt-1 block text-sm text-slate-400">
            {description}
          </span>
        )}
      </span>
    </button>
  )
}

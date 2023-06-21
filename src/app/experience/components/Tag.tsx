import { PropsWithChildren } from 'react'

export default function Tag({ children }: PropsWithChildren) {
  return (
    <div className="bg-accent-600/[0.08] text-accent-600 dark:text-accent-400 dark:dark:bg-accent-400/10 inline-flex h-6 items-center gap-1 rounded-full px-2 text-[13px] font-medium dark:font-normal">
      {children}
    </div>
  )
}

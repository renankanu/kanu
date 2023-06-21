import { PropsWithChildren } from 'react'

export default function Item({ children = null }: PropsWithChildren) {
  return (
    <article className="md:pb-16">
      <div className="pointer-events-none sticky top-[86px] -ml-8 pb-12 fm:relative fm:top-0 md:-ml-12 lg:-ml-24">
        <div className="absolute -ml-0.5 mt-2.5 h-4 w-4 rounded-full border-2 border-slate-700 bg-white dark:border-slate-300 dark:bg-slate-900 md:-ml-3 md:mt-2 md:h-5 md:w-5" />
        <div className="absolute z-[-1] -ml-2 mt-4 w-8 border border-slate-700 dark:border-slate-300 md:-ml-4 md:w-10 lg:w-12" />
      </div>
      <div className="-mt-12">{children}</div>
    </article>
  )
}

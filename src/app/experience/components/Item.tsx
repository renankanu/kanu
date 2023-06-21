import { PropsWithChildren } from 'react'

export default function Item({ children = null }: PropsWithChildren) {
  return (
    <article>
      <div className="sticky pb-12 fm:relative sm:-ml-[1.9rem] md:-ml-14 lg:-ml-[5.6rem] xl:-ml-[5.6rem]">
        <div className="absolute -ml-0.5 mt-2.5 h-5 w-5 rounded-full border-2 border-slate-300 bg-slate-900 sm:h-4 sm:w-4" />
        <div className="absolute z-[-1] -ml-4 mt-[18px] w-14 border border-slate-300 sm:-ml-2 sm:mt-4 sm:w-8" />
      </div>
      <div className="-mt-12">{children}</div>
    </article>
  )
}

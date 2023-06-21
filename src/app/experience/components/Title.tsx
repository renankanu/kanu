import { PropsWithChildren } from 'react'

export default function Title({ children }: PropsWithChildren) {
  return (
    <h1 className="mb-4 font-alt text-4xl font-extrabold sm:mb-1 sm:text-2xl">
      {children}
    </h1>
  )
}

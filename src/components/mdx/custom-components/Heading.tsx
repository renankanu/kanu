import type { DetailedHTMLProps, HTMLAttributes } from 'react'

type Props = DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>
export function H1({ children }: Props) {
  return (
    <h1 className="group text-3xl font-bold">
      <span>{children}</span>
    </h1>
  )
}

export function H2({ children }: Props) {
  return (
    <h2 className="group text-2xl font-bold">
      <span>{children}</span>
    </h2>
  )
}

export function H3({ children }: Props) {
  return (
    <h3 className="group text-xl font-bold">
      <span>{children}</span>
    </h3>
  )
}

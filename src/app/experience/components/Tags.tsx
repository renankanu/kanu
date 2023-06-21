import { PropsWithChildren } from 'react'

export function Tags({ children = null }: PropsWithChildren) {
  return <div className="-mt-1 mb-4 flex gap-2">{children}</div>
}

'use client'
import mdxCustomComponents from '@/components/mdx/custom-components'
import { MDXProvider } from '@mdx-js/react'
import { ReactNode } from 'react'
import FramerMotionProvider from './FramerMotionProvider'

export default function GlobalProvider({ children }: { children: ReactNode }) {
  return (
    <MDXProvider components={mdxCustomComponents}>
      <FramerMotionProvider>{children}</FramerMotionProvider>
    </MDXProvider>
  )
}

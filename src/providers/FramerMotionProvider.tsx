'use client'
import mdxCustomComponents from '@/components/mdx/custom-components'
import { MDXProvider } from '@mdx-js/react'
import { LazyMotion, MotionConfig, domAnimation } from 'framer-motion'
import { ReactNode } from 'react'

export default function FramerMotionProvider({
  children,
}: {
  children: ReactNode
}) {
  return (
    <MDXProvider components={mdxCustomComponents}>
      <MotionConfig reducedMotion="user">
        <LazyMotion strict features={domAnimation}>
          {children}
        </LazyMotion>
      </MotionConfig>
    </MDXProvider>
  )
}

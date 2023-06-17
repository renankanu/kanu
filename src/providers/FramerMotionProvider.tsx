'use client'
import { LazyMotion, MotionConfig, domAnimation } from 'framer-motion'
import { ReactNode } from 'react'

export default function FramerMotionProvider({
  children,
}: {
  children: ReactNode
}) {
  return (
    <MotionConfig reducedMotion="user">
      <LazyMotion strict features={domAnimation}>
        {children}
      </LazyMotion>
    </MotionConfig>
  )
}

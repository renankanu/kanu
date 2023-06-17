'use client'
import BaseLayout from '@/components/BaseLayout'
import HelloWorld from './hello.mdx'

export default function Skill() {
  return (
    <BaseLayout>
      <div className="background-grid background-grid--fade-out pb-20 pt-36 xl:pb-28 xl:pt-52">
        <div className="content-wrapper">
          <p>Skill</p>
          <HelloWorld />
        </div>
      </div>
    </BaseLayout>
  )
}

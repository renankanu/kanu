'use client'
import { m } from 'framer-motion'
import Image from 'next/image'
export default function IntroImage() {
  return (
    <div className="h-[456px] w-[456px]  md:h-[248px] md:w-[248px] lg:h-[456px] lg:w-[456px]">
      <m.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            delay: 0.5,
          },
        }}
      >
        <Image
          alt="Renan Santos"
          src="/assets/kanu.png"
          width={457}
          height={526}
          quality={100}
          priority
        />
      </m.div>
    </div>
  )
}

'use client'
import { m } from 'framer-motion'
import Image from 'next/image'
export default function IntroImage() {
  return (
    <div className="flex h-[248px] w-[248px]  md:mb-20  lg:mb-20 lg:ml-12 lg:h-[480px] lg:w-[480px] xl:ml-20 xl:h-[480px] xl:w-[480px] ">
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
          src="/assets/kanu_purple.png"
          width={456}
          height={456}
          quality={100}
          priority
        />
      </m.div>
    </div>
  )
}

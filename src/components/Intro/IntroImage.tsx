'use client'
import { m } from 'framer-motion'
import Image from 'next/image'
export default function IntroImage() {
  return (
    <div className="ml-20 h-[248px]  w-[248px] sm:mt-20 md:mt-20 lg:h-[400px] lg:w-[400px] xl:h-[400px] xl:w-[400px]">
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

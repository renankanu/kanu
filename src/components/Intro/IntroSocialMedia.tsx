'use client'
import { m } from 'framer-motion'

const animation = {
  hide: {
    x: -16,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
  },
}

function LinkedinButton() {
  return (
    <button className="button button--solid md:button--big mr-4 min-w-[128px] bg-[#0072b1] text-[#fff] hover:bg-[#006097]">
      Linkedin
    </button>
  )
}
function GitButton() {
  return (
    <button className="button button--solid md:button--big min-w-[128px] bg-[#3D3F44] text-[#fff] hover:bg-[#757575]">
      GitHub
    </button>
  )
}

export default function IntroSocialMedia() {
  return (
    <m.div className="mt-10 flex gap-2" initial="hide" animate="show">
      <m.div
        className="relative z-20"
        variants={animation}
        transition={{ delay: 0.4 }}
      >
        <LinkedinButton />
        <GitButton />
      </m.div>
    </m.div>
  )
}

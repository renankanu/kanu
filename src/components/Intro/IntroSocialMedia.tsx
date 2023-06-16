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

function openLink(link: string) {
  window.open(link, '_blank')
}

function LinkedinButton() {
  return (
    <button
      className="button button--solid md:button--big mr-4 min-w-[128px] bg-[#0072b1] text-[#fff] hover:bg-[#006097]"
      onClick={() => openLink('https://www.linkedin.com/in/renansantosbr/')}
    >
      Linkedin
    </button>
  )
}
function GitButton() {
  return (
    <button
      className="button button--solid md:button--big min-w-[128px] bg-[#3D3F44] text-[#fff] hover:bg-[#757575]"
      onClick={() => openLink('https://github.com/renankanu')}
    >
      GitHub
    </button>
  )
}

export default function IntroSocialMedia() {
  return (
    <m.div
      className="mt-10 flex gap-2 sm:flex sm:justify-center md:flex md:justify-center"
      initial="hide"
      animate="show"
    >
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

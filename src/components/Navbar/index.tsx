'use client'
import useOnScroll from '@/hooks/useOnScroll'
import Link from 'next/link'
import { ReactNode } from 'react'
import NavLinkExpanded from './NavLinkExpanded'
import NavLogo from './NavLog'

export type NavLinkProps = {
  title: string
  href: string
  icon?: ReactNode
  className?: string
}

function NavLink({ title, href, icon = null, className }: NavLinkProps) {
  return (
    <Link href={href} className={`nav-link ${className}`}>
      {title}
      {icon}
    </Link>
  )
}

const workLinks = [
  { title: 'Skills', href: '/skill' },
  { title: 'Educação', href: '/work/education' },
  { title: 'Experiência', href: '/work/experience' },
]

export default function Navbar() {
  const isScrolled = useOnScroll(0)
  return (
    <header className="fm:absolute fixed left-0 right-0 top-0 z-[1000]">
      <div
        className={`fixed inset-0 h-16 ${
          isScrolled
            ? 'border-divider-light border-b backdrop-blur  dark:border-gray-800 dark:bg-slate-900/80'
            : 'bg-transparent'
        } fm:hidden`}
      />
      <div />
      <div className="content-wrapper-max">
        <div className="relative z-50 flex h-16 items-center justify-between px-2 text-sm md:px-4">
          <nav className="flex">
            <NavLogo href="/" title="Home" />
            <ul className="flex items-center md:gap-1">
              <li>
                <NavLink title="Projetos" href="/projects" />
              </li>
              <NavLinkExpanded items={workLinks} />
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

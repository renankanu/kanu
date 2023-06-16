'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Logo from './Logo'

interface NavLogoProps {
  href: string
  title: string
}

export default function NavLogo({ href, title }: NavLogoProps) {
  const pathname = usePathname()
  const isActive = pathname === href
  return (
    <Link
      href={href}
      className="flex h-9 items-center gap-2 rounded-xl px-2"
      aria-label={title}
    >
      <Logo active={isActive} />
    </Link>
  )
}

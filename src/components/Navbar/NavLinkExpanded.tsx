import React from 'react'

import { ChevronRightIcon } from '@/components/Icons'

import NavLink, { NavLinkProps } from './NavLink'

interface NavLinkExpandedProps {
  items: Array<NavLinkProps>
}

function NavLinkExpanded({ items }: NavLinkExpandedProps) {
  return (
    <div className="flex">
      <div className="nav-link pointer-events-none ml-2 mr-2">
        <ChevronRightIcon className="h-1.5 w-1.5" />
      </div>
      <ul className="flex items-center">
        {items.map((item, idx) => (
          <React.Fragment key={item.href}>
            <li>
              <NavLink title={item.title} href={item.href} />
            </li>
            {idx !== items.length - 1 && (
              <li>
                <div className="nav-link__separator"> - </div>
              </li>
            )}
          </React.Fragment>
        ))}
      </ul>
    </div>
  )
}

export default NavLinkExpanded

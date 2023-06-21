import dayjs from 'dayjs'
import 'dayjs/locale/pt-br'
import { PropsWithChildren, ReactElement } from 'react'
import Item from './Item'

interface ItemsProps {
  date: string
  children?: ReactElement<typeof Item> | ReactElement<typeof Item>[]
}

const formatDate = (date: string) => {
  if (dayjs(date).isValid()) {
    return dayjs(date, 'YYYY-MM-DD').locale('pt-br').format('MMMM [de] YYYY')
  }

  return date
}

export default function Items({
  date,
  children,
}: PropsWithChildren<ItemsProps>) {
  return (
    <div className="flex flex-row gap-6 md:gap-12 lg:gap-20 xl:gap-20">
      <div className="w-40 sm:hidden md:pb-24">
        <div className="mt-8 pt-1.5">
          <div className="font-mono font-bold text-slate-300">
            <time className="block sm:hidden" dateTime={date}>
              {formatDate(date)}
            </time>
          </div>
        </div>
      </div>
      <div className="items-stretch border border-divider-dark" />
      <div className="flex min-w-0 flex-1 flex-col py-8">{children}</div>
    </div>
  )
}

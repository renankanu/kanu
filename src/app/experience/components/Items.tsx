import dayjs from 'dayjs'
import { PropsWithChildren, ReactElement } from 'react'
import Item from './Item'

interface ItemsProps {
  date: string
  children?: ReactElement<typeof Item> | ReactElement<typeof Item>[]
}

const formatDate = (date: string) => {
  if (dayjs(date).isValid()) {
    return dayjs(date, 'YYYY-MM-DD').format('MMMM D, YYYY')
  }

  return date
}

export default function Items({
  date,
  children,
}: PropsWithChildren<ItemsProps>) {
  return (
    <div className="flex flex-row gap-6 md:gap-12 lg:gap-24">
      <div className="sm:hidden md:block md:pb-24">
        <div className="mt-4 pt-1.5 fm:relative fm:top-0 md:sticky md:top-[86px]">
          <div className="font-mono font-bold text-slate-700 dark:text-slate-300 md:text-right">
            <time
              className="sm:block md:block lg:hidden xl:hidden"
              dateTime={date}
            >
              {date}
            </time>
            <time
              className="sm:hidden md:hidden lg:block xl:block"
              dateTime={date}
            >
              {formatDate(date)}
            </time>
          </div>
        </div>
      </div>
      <div className="items-stretch border border-divider-dark" />
      <div className="flex min-w-0 flex-1 flex-col gap-16 py-8 md:gap-0 md:py-4">
        {children}
      </div>
    </div>
  )
}

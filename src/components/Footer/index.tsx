import dayjs from 'dayjs'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="background-grid background-grid--fade-in mt-24 border-divider-light pt-16 text-sm text-slate-900 dark:border-divider-dark dark:text-slate-200">
      <div className="content-wrapper">
        <div className="flex justify-between border-t border-[#20293A] py-6 text-sm dark:border-[#20293A] sm:flex-col sm:items-center sm:justify-center">
          <div className="font-semibold">
            &copy;Copyright {dayjs().format('YYYY')}, Renan Santos de Oliveira
          </div>
          <div className="flex text-slate-500 dark:text-slate-400 sm:mt-4">
            <Image
              src="/assets/ic_mail.svg"
              alt="Gmail icon"
              width={16}
              height={16}
            />
            <span className="font-semibold text-white">
              &nbsp; renankanu@gmail.com
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

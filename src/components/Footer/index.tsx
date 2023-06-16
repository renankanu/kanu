import dayjs from 'dayjs'

export default function Footer() {
  return (
    <footer className="background-grid background-grid--fade-in border-divider-light dark:border-divider-dark mt-24 pt-16 text-sm text-slate-900 dark:text-slate-200">
      <div className="content-wrapper">
        <div className="flex justify-between border-t border-[#20293A] py-6 text-sm dark:border-[#20293A] sm:flex-col sm:items-center sm:justify-center">
          <div className="font-semibold">
            &copy;Copyright {dayjs().format('YYYY')}, Renan Santos de Oliveira
          </div>
          <div className="text-slate-500 dark:text-slate-400 sm:mt-4">
            <span>📪 &nbsp; renankanu@gmail.com</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

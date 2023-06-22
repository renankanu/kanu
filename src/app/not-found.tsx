import Head from 'next/head'
import Link from 'next/link'

import type { ReactElement } from 'react'

function Error404() {
  return (
    <>
      <Head>
        <title>Page Not Found</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="noindex" />
      </Head>
      <div className="flex min-h-screen flex-col items-center justify-center">
        <div className="content-wrapper text-center text-slate-600 dark:text-slate-400">
          <h1 className="py-12 text-center">
            <div className="mb-32 text-[10rem] font-extrabold sm:mb-20 sm:text-8xl">
              Oppps!
            </div>
            <div className="mb-3 text-8xl font-extrabold">404</div>
            <div className="text-2xl">Pagina não encontrada</div>
          </h1>
          <Link
            href="/"
            className="rounded-xl bg-primary-500 px-4 py-2 font-sans text-xl font-semibold text-slate-50"
          >
            Voltar
          </Link>
        </div>
      </div>
    </>
  )
}

Error404.getLayout = function getLayout(page: ReactElement) {
  return page
}

export default Error404

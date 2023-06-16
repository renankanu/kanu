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
      <div className="background-grid flex h-full items-center justify-center">
        <div className="content-wrapper text-center text-slate-600 dark:text-slate-400">
          <h1 className="py-12 text-center">
            <div className="mb-3 text-8xl font-extrabold">404</div>
            <div className="text-2xl"> Page Not Found </div>
          </h1>
          <Link
            href="/"
            className="text-accent-600 dark:text-accent-400 rounded-xl px-4 py-2 text-xl"
          >
            back to homepage
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

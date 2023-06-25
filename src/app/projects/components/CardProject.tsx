import { GooglePlayIcon } from '@/components/Icons'
import { ReactNode } from 'react'

interface CardProjectProps {
  title: string
  description?: string
  icon?: ReactNode
  googleUrl?: string
  appleUrl?: string
  externalUrl?: string
}

export default function CardProject({
  title,
  description = '',
  icon = null,
  googleUrl = '',
  appleUrl = '',
  externalUrl = '',
}: CardProjectProps) {
  return (
    <div className="mb-10 max-w-sm rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800">
      <div className="flex flex-row items-center justify-center p-5">
        {icon}
      </div>
      <div className="p-5">
        <h5 className="mb-2 font-alt text-2xl font-bold tracking-tight text-white">
          {title}
        </h5>
        <p className="mb-3 font-normal text-gray-400">{description}</p>
        <div>
          {googleUrl && (
            <a
              href={googleUrl}
              target="_blank"
              className="inline-flex items-center rounded-lg bg-primary-600 px-3 py-2 text-center text-sm font-medium text-white hover:bg-primary-700 focus:outline-none  focus:ring-4 focus:ring-primary-800"
              rel="noreferrer"
            >
              <GooglePlayIcon className="mr-3 h-8 w-8" />
              <span className="w-full">Google Play</span>
            </a>
          )}
          {appleUrl && (
            <a
              href={appleUrl}
              target="_blank"
              className="inline-flex items-center rounded-lg bg-primary-600 px-3 py-2 text-center text-sm font-medium text-white hover:bg-primary-700 focus:outline-none  focus:ring-4 focus:ring-primary-800"
              rel="noreferrer"
            >
              <svg
                className="mr-3 h-6 w-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  fillRule="evenodd"
                />
              </svg>
              <span className="w-full">App Store</span>
            </a>
          )}
        </div>
        {externalUrl && (
          <a
            target="_blank"
            href={externalUrl}
            className="inline-flex items-center rounded-lg bg-primary-600 px-3 py-2 text-center text-sm font-medium text-white hover:bg-primary-700 focus:outline-none  focus:ring-4 focus:ring-primary-800"
            rel="noreferrer"
          >
            Ver mais
            <svg
              aria-hidden="true"
              className="-mr-1 ml-2 h-4 w-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        )}
      </div>
    </div>
  )
}

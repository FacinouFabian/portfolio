import React, { ReactNode } from 'react'
import Head from 'next/head'

type Props = {
  children?: ReactNode
  title?: string
}

const Base = ({ children, title = 'This is the default title' }: Props) => (
  <div className="w-full h-full">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
    </header>
      {children}
      <footer className="bg-white w-full relative bottom-0 z-50">
        <hr/>
        <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center md:order-2">
            <a href="https://www.linkedin.com/in/fabian-facinou/" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">LinkedIn</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <g>
                  <path d="M5.366,2.973c0,1.376-1.035,2.479-2.699,2.479H2.636C1.034,5.453,0,4.348,0,2.973c0-1.409,1.067-2.482,2.698-2.482
                    C4.331,0.49,5.336,1.564,5.366,2.973z M0.28,21.766h4.772V7.413H0.28V21.766z M16.764,7.077c-2.531,0-3.664,1.39-4.301,2.37v0.046
                    h-0.031c0.012-0.014,0.023-0.03,0.031-0.046V7.414H7.692c0.062,1.345,0,14.353,0,14.353h4.771v-8.016
                    c0-0.432,0.029-0.855,0.157-1.164c0.346-0.854,1.132-1.747,2.446-1.747c1.729,0,2.42,1.319,2.42,3.247v7.68h4.771v-8.229
                    C22.258,9.126,19.902,7.077,16.764,7.077z"
                  /></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g>
                </g>
              </svg>
            </a>
            <a href="https://github.com/FacinouFabian" className="ml-6 text-gray-400 hover:text-gray-500">
              <span className="sr-only">GitHub</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-base leading-6 text-gray-400">
              &copy; 2020 Workflow, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
  </div>
)

export default Base

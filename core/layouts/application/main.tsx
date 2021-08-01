import React from 'react'
import Base from '../base'
import { FunctionComponent, ReactNode, ReactElement } from 'react'
/* import { useRouter } from "next/router"; */
import Navbar from '../../../components/Nav'

interface Props {
  children: ReactNode
  pageTitle: string
}

const Main: FunctionComponent<Props> = ({ children, pageTitle }): ReactElement => {
  /* const { pathname, query } = useRouter() */

  return (
    <Base title={pageTitle}>
      <div className="w-full h-full">
        <div className="w-full h-full">
          <Navbar />
          {children}
        </div>
      </div>
    </Base>
  )
}

export default Main

import * as React from 'react'
/* import { useRouter } from "next/router"; */
import Navbar from '@/components/Nav'

interface Props {
  children: React.ReactNode
}

const Main: React.FunctionComponent<Props> = ({ children }): React.ReactElement => (
  <div className="w-full h-full">
    <div className="w-full h-full">
      <Navbar />
      {children}
    </div>
  </div>
)

export default Main

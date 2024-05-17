import Navbar from '@/components/Navbar'
import React, {ReactNode} from 'react'

const Layout = ({children}:{children:ReactNode}) => {
  return (
    <div className="px-8 py-8">
        <Navbar />
        {children}
    </div>
  )
}

export default Layout
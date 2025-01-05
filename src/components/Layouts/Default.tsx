import { FunctionComponent, ReactNode } from 'react'
import { Seo } from '../Seo'
import { Navbar } from '../Navbar'

interface DefaultLayoutProps {
  title: string
  children: ReactNode
}

export const DefaultLayout: FunctionComponent<DefaultLayoutProps> = (props) => {
  return (
    <Seo title={props.title}>
      <Navbar />

      {props.children}

      <div className="border-t py-3 text-center">
        <footer>Footer</footer>
      </div>
    </Seo>
  )
}

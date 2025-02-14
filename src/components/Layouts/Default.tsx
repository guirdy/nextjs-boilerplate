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
      <div className="min-h-screen flex flex-col">
        <Navbar />

        <div className="flex flex-1 container mx-auto lg:px-0 px-4">
          <div className="flex-1 w-full">{props.children}</div>
        </div>

        <div className="border-t py-3 text-center">
          <footer>Footer</footer>
        </div>
      </div>
    </Seo>
  )
}

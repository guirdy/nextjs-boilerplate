import Image from 'next/image'
import Link from 'next/link'
import { FunctionComponent } from 'react'
import { ThemeModeToggle } from '../ThemeModeToggle'
import { ChangeLanguage } from '../ChangeLanguage'

export const Navbar: FunctionComponent = () => {
  return (
    <div className="sticky top-0 border-b border-border z-50">
      <div className="flex h-16 items-center justify-between px-4 container mx-auto">
        <Link
          href="/"
          className="ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded"
        >
          <Image
            src="/logo.png"
            className="dark:hidden"
            width={80}
            height={80}
            alt="Company Logo Light"
          />

          <Image
            src="/logo-dark.png"
            className="hidden dark:block"
            width={80}
            height={80}
            alt="Company Logo Dark"
          />
        </Link>

        <div className="flex items-center gap-2">
          <ChangeLanguage />
          <ThemeModeToggle />
        </div>
      </div>
    </div>
  )
}

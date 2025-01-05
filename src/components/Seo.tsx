import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import { FunctionComponent } from 'react'

interface SeoProps {
  title?: string
  description?: string
  children: React.ReactNode
}

export const Seo: FunctionComponent<SeoProps> = (props) => {
  const { asPath, locale } = useRouter()
  const url = `${process.env.NEXT_PUBLIC_URL}${asPath}`

  return (
    <>
      <NextSeo
        title={props.title}
        description={props.description}
        canonical={url}
        openGraph={{
          title: props.title,
          description: props.description,
          url,
          site_name: process.env.NEXT_PUBLIC_SITE_NAME,
          type: 'website',
          locale,
        }}
        twitter={{
          site: url,
          cardType: 'summary',
        }}
      />

      {props.children}
    </>
  )
}

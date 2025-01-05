import { ThemeProvider } from '@/components/ThemeProvider'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import SEO from '../../next-seo.config'
import { DefaultSeo } from 'next-seo'
import { Roboto, Roboto_Mono } from 'next/font/google'

const robotoSans = Roboto({
  variable: '--font-roboto-sans',
  subsets: ['latin'],
  weight: ['400', '700'],
})

const robotoMono = Roboto_Mono({
  variable: '--font-roboto-mono',
  subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <DefaultSeo {...SEO} />
      <main
        className={`${robotoSans.variable} ${robotoMono.variable} font-[family-name:var(--font-roboto-sans)]`}
      >
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  )
}

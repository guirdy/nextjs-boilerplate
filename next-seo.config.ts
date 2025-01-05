export default {
  titleTemplate: `%s - ${process.env.NEXT_PUBLIC_SITE_NAME}`,
  defaultTitle: process.env.NEXT_PUBLIC_SITE_NAME,
  canonical: process.env.NEXT_PUBLIC_SITE_URL,
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: process.env.NEXT_PUBLIC_SITE_URL,
    site_name: process.env.NEXT_PUBLIC_SITE_NAME,
  },
  twitter: {
    cardType: 'summary',
    site: process.env.NEXT_PUBLIC_SITE_URL,
  },
};

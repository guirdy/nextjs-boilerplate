import { DefaultLayout } from '@/components/Layouts/Default'
import { useLocale } from '@/hooks/use-locale'

export default function Home() {
  const t = useLocale()

  return (
    <DefaultLayout title="Home">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-114px)]">
        <div className="flex flex-col gap-2">
          <strong className="uppercase mb-3">{t.boilerplateWith}:</strong>
          <span>✅ SEO</span>
          <span>✅ {t.Locale} i18n</span>
          <span>✅ {t.Theme} (Light / Dark)</span>
          <span>✅ {t.DefaultLayout}</span>
        </div>
      </div>
    </DefaultLayout>
  )
}

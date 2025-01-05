import { useRouter } from 'next/router'
import enUS from '@/locales/en/common.json'
import ptBR from '@/locales/pt/common.json'

type Locales = 'en' | 'pt'

export const useLocale = () => {
  const router = useRouter()
  const lang = router.locale as Locales

  const dictionary = {
    en: enUS,
    pt: ptBR,
  }

  return dictionary[lang]
}

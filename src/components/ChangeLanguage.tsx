import React, { FunctionComponent } from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import { Check, ChevronDown, Languages } from 'lucide-react'
import { useLocale } from '@/hooks/use-locale'
import { cn } from '@/lib/utils'
import { useRouter } from 'next/router'
import { Button } from './ui/button'

export const ChangeLanguage: FunctionComponent = () => {
  const t = useLocale()
  const router = useRouter()

  return (
    <DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="ml-auto">
            <Languages className="w-4 h-4" />
            {t.Language} <ChevronDown />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuPortal>
          <DropdownMenuContent className="sm:w-40 space-y-1">
            <DropdownMenuItem
              className={cn(
                { 'bg-secondary': router.locale === 'pt' },
                'flex items-center justify-between',
              )}
              onClick={() => {
                router.push(router.asPath, router.asPath, {
                  locale: 'pt',
                })
              }}
            >
              Português
              {router.locale === 'pt' && <Check className="w-4 h-4" />}
            </DropdownMenuItem>
            <DropdownMenuItem
              className={cn(
                { 'bg-secondary': router.locale === 'en' },
                'flex items-center justify-between',
              )}
              onClick={() => {
                router.push(router.asPath, router.asPath, {
                  locale: 'en',
                })
              }}
            >
              English
              {router.locale === 'en' && <Check className="w-4 h-4" />}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenuPortal>
      </DropdownMenu>
    </DropdownMenu>
  )
}

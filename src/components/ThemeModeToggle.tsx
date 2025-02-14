import * as React from 'react'
import { Check, Moon, MoonIcon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { cn } from '@/lib/utils'
import { useLocale } from '@/hooks/use-locale'

export function ThemeModeToggle() {
  const { theme, setTheme } = useTheme()
  const t = useLocale()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 dark:hidden block" />
          <Moon className="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 dark:block hidden" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="space-y-1">
        <DropdownMenuItem
          className={cn(
            { 'bg-secondary': theme === 'light' },
            'flex items-center justify-between',
          )}
          onClick={() => setTheme('light')}
        >
          {t.light}
          {theme === 'light' && <Check className="w-4 h-4" />}
        </DropdownMenuItem>
        <DropdownMenuItem
          className={cn(
            { 'bg-secondary': theme === 'dark' },
            'flex items-center justify-between',
          )}
          onClick={() => setTheme('dark')}
        >
          {t.dark}
          {theme === 'dark' && <Check className="w-4 h-4" />}
        </DropdownMenuItem>
        <DropdownMenuItem
          className={cn(
            { 'bg-secondary': theme === 'system' },
            'flex items-center justify-between',
          )}
          onClick={() => setTheme('system')}
        >
          {t.system}
          {theme === 'system' && <Check className="w-4 h-4" />}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

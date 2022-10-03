import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import '../styles/globals.css'
import '../lang/index'
import { ThemeProvider } from '@mui/system'
import { themeOptions } from '../styles/theme'
import { createTheme } from '@mui/material'

const Theme = createTheme(themeOptions)

function MyApp({ Component, pageProps }) {
  const { i18n } = useTranslation()
  const { locale } = useRouter()

  useEffect(() => {
    if (locale) i18n.changeLanguage(locale)
    console.log(locale)
  }, [i18n, locale])

  return (
    <ThemeProvider theme={Theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp

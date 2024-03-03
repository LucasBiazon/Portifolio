import React, { createContext, useState, useContext, useEffect } from 'react'
interface LanguageContextProps {
  children: React.ReactNode
}

interface LanguageContextType {
  language: string
  changeLanguage: (newLanguage: string) => void
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  changeLanguage: () => {},
})

export const LanguageProvider = ({ children }: LanguageContextProps) => {
  const [language, setLanguage] = useState('en')
  useEffect(() => {
    let userLocale = navigator?.languages?.length
      ? navigator.languages[0]
      : navigator.language
    if (userLocale === 'pt-br' || userLocale === 'pt-BR') {
      userLocale = 'pt'
      setLanguage(userLocale)
    }
    return () => {}
  }, [])

  const changeLanguage = (newLanguage: string) => {
    setLanguage(newLanguage)
  }

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  return useContext(LanguageContext)
}

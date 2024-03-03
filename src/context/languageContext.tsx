import React, { createContext, useState, useContext } from 'react'
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

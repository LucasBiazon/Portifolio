import { useTheme } from '@/context/themeContext'
import { FaMoon, FaSun } from 'react-icons/fa'

interface ThemeButtonProps {
  description?: string
}
export function ThemeButton({ description }: ThemeButtonProps) {
  const { darkMode, toggleTheme } = useTheme()
  const handleToggleTheme = () => {
    toggleTheme() // Correção: Chame a função toggleTheme corretamente
  }
  return (
    <button
      type="button"
      onClick={handleToggleTheme}
      className="flex items-center gap-2 text-zinc-50 font-semibold focus:outline-none hover:text-zinc-600"
    >
      {darkMode ? (
        <FaMoon className="text-gray-300 dark:text-sky-300" />
      ) : (
        <FaSun className="text-blue-500 dark:text-gray-300" />
      )}
      {description ? description : ' '}
    </button>
  )
}

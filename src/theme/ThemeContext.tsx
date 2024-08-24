import { createContext, useContext, useState, type FC, type ReactNode } from "react"
import { createTheme } from "./createTheme"
import type { Theme } from "./theme"

interface ThemeContextType {
  theme: Partial<Theme>
  changeTheme: (newTheme: Partial<Theme>) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}

interface ThemeProviderProps {
  children: ReactNode
  customTheme?: Partial<Theme>
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children, customTheme }) => {
  const [theme, setTheme] = useState<Partial<Theme>>(createTheme(customTheme))

  const changeTheme = (newTheme: Partial<Theme>) => setTheme(createTheme(newTheme))

  return <ThemeContext.Provider value={{ theme, changeTheme }}>{children}</ThemeContext.Provider>
}

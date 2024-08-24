import deepmerge from "deepmerge"
import defaultTheme from "./defaultTheme"
import type { Theme } from "./theme"

export const createTheme = (customTheme: Partial<Theme> = {}) => {
  if (Object.keys(customTheme).length) return customTheme
  return deepmerge(defaultTheme, customTheme)
}

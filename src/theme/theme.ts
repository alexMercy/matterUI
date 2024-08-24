export interface Palette {
  primary: {
    main: string
    contrastText: string
  }
  secondary: {
    main: string
    contrastText: string
  }
  background: {
    default: string
    paper: string
  }
  text: {
    primary: string
    secondary: string
  }
}

export interface Typography {
  fontFamily: string
  fontSize: number
  h1: {
    fontSize: string
    fontWeight: number
  }
}

export interface Theme {
  palette: Palette
  typography: Typography
}

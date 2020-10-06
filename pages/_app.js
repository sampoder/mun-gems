import '../styles/globals.css'
import { GeistProvider, CssBaseline } from '@geist-ui/react'

const breakpoints = {
  xs: { min: '0', max: '820px' },
  sm: { min: '820px', max: '900px' },
  md: { min: '900px', max: '1280px' },
  lg: { min: '1280px', max: '1920px' },
  xl: { min: '1920px', max: '10000px' },
}

function MyApp({ Component, pageProps }) {
  return (
    <GeistProvider theme={{ breakpoints: breakpoints }}>
      <CssBaseline />
      <Component {...pageProps} />
    </GeistProvider>
  )
}
export default MyApp
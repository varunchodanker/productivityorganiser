import '../styles/globals.css'
import '../styles/typography.css'
import type { AppProps } from 'next/app'
import { createTheme, ThemeProvider } from '@mui/material/styles';

function MyApp({ Component, pageProps }: AppProps) {
  const theme = createTheme({
    typography: {
      fontFamily: ["Fredoka"].join(",")
    }
  });

  return (
    <ThemeProvider theme = {theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;

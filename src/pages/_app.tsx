import Head from "next/head";
import App from 'next/app'

import 'bootstrap/dist/css/bootstrap.min.css';

import { ThemeProvider } from "styled-components";

import GlobalTheme from "styles/global";
import theme from "styles/theme";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    
    return (
      <ThemeProvider theme={theme}>
        <Head>
          <meta name="theme-color" content={theme.colors.black} />
        </Head>



        <GlobalTheme />

        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}

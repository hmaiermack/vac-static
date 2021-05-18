import '../styles/globals.css'
import Head from 'next/head'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css';
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; /* eslint-disable import/first */

//basic seo package
import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo.config'


library.add(fas)



function MyApp({ Component, pageProps }) {

  return (
    <>
    <DefaultSeo {...SEO} />
      <Head>
        <link rel="shortcut icon" href="/vacicon.png" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

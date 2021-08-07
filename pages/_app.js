import '../styles/globals.css'
import Layout from '../components/Layout'
import Router from 'next/router'
import NProgress from 'nprogress' //nprogress module
import 'nprogress/nprogress.css' //styles of nprogress
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
})
//Binding events.
Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

// https://medium.com/@SandeepDinesh/eliminating-next-js-isr-builds-with-client-side-rendering-2c30ee198831
// If a page navigation takes longer than 100ms to complete, abort the SPA routing and do a full page refresh.

Router.onRouteChangeStart = (url) => {
  if (url !== window.location.pathname) {
    window.routeTimeout = setTimeout(() => (window.location = url), 100)
    NProgress.start()
  }
}
Router.onRouteChangeComplete = () => {
  clearTimeout(window.routeTimeout)
  NProgress.done()
}

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default MyApp

import '../styles/globals.css'
import NProgress from 'nprogress';
import {Router} from 'next/router';
import "nprogress/nprogress.css";

NProgress.configure({
  minimum: 0.5,
  showSpinner: false,
  easing: "ease",
  speed: 800,
})

Router.events.on('routeChangeStart', () => {NProgress.start()})
Router.events.on('routeChangeComplete', () => {NProgress.done()})
Router.events.on('routeChangeError', () => {NProgress.done()})

//CONNECTIONSTATE
import ConnectionProvider from '../context/connectionContext';
import ProviderProvider from '../context/providerContext';
import ToolTipProvider from '../context/tooltipContext';
import UserProvider from '../context/userContext';

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <ToolTipProvider>
        <ProviderProvider>
          <ConnectionProvider>
            <Component {...pageProps} />
          </ConnectionProvider>
        </ProviderProvider>
      </ToolTipProvider>
    </UserProvider>
  )
}

export default MyApp

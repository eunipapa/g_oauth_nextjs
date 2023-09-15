import '@/styles/globals.css'
import { GoogleOAuthProvider } from '@react-oauth/google';

export default function App({ Component, pageProps }) {
  const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENTID;

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <Component {...pageProps}></Component>
      </GoogleOAuthProvider>
  )
}

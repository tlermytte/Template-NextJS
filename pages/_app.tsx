import { AppProps } from 'next/app';
import 'styles/_globals.scss';

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default App;

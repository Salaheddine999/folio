import '../styles/root.scss';
import type { AppProps } from 'next/app';
import Header from '../components/Header';
import CursorManager from '../components/CustomCursor/CursorManager';
import CustomCursor from '../components/CustomCursor';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { Analytics } from '@vercel/analytics/react';


function MyApp({ Component, pageProps }: AppProps) {
  const [loader, setLoader] = useState(true);
  const router = useRouter();

  const { pathname } = router;
  if (pathname === '/roadmap') {
    return (
      <CursorManager>
        <>
          {/* <HomeLoader setLoader={setLoader} title="hey" /> */}
          <CustomCursor />

          {/* {!loader && ( */}
          {/* <> */}
          <Component {...pageProps} />
          <Analytics />
         
          {/* </> */}
          {/* )} */}
        </>
      </CursorManager>
    );
  }
  return (
    <CursorManager>
      <>
        {/* <HomeLoader setLoader={setLoader} title="folio" /> */}

        {/* {!loader && ( */}
        <>
          <Header />
          <Component {...pageProps} />
        </>
        {/* )} */}
      </>
    </CursorManager>
  );
}

export default MyApp;

import '../styles/root.scss';
import type { AppProps } from 'next/app';
import Header from '../components/Header';
import CursorManager from '../components/CustomCursor/CursorManager';
import CustomCursor from '../components/CustomCursor';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { Analytics } from '@vercel/analytics/react';
import SmoothScrolling from '@/components/SmoothScrolling';
import { SpeedInsights } from '@vercel/speed-insights/react';

function MyApp({ Component, pageProps }: AppProps) {
  // const [loader, setLoader] = useState(true);
  // const router = useRouter();

  // const { pathname } = router;
  // if (pathname === '/roadmap') {
  //   return (
  //     <CursorManager>
  //       <>
  //         {/* <HomeLoader setLoader={setLoader} title="hey" /> */}
  //         <CustomCursor />

  //         {/* {!loader && ( */}
  //         {/* <> */}
  //         <Component {...pageProps} />
  //         {/* </> */}
  //         {/* )} */}
  //       </>
  //     </CursorManager>
  //   );
  // }
  const router = useRouter();

  return (
    <SmoothScrolling>
      <CursorManager>
        <>
          {/* <HomeLoader setLoader={setLoader} title="folio" /> */}

          {/* {!loader && ( */}
          <>
            <Header />
            <Component {...pageProps} />
            <SpeedInsights/>
            <SpeedInsights route={router.pathname} />
          </>
          {/* )} */}
        </>
      </CursorManager>
    </SmoothScrolling>
  );
}

export default MyApp;

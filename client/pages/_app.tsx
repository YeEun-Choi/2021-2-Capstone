import Container from '../components/layout/index'

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <Container> */}
      <Component {...pageProps} />
      {/* </Container> */}
      <style global jsx>
        {`
                    @import url('https://fonts.googleapis.com/css2?family=Gowun+Dodum&display=swap');
                    html, body {                                
                        width: 100%;
                        height: 100%;
                        color: #222;
                        font-family: 'Gowun Dodum', sans-serif;
                        // font-size: 62.5%;
                        padding: 0;
                        margin: 0;
                    }
				`}
      </style>
    </>
  )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp
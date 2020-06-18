import { wrapper } from "../redux";

function App({ Component, pageProps }: { Component: any; pageProps: any }) {
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(App);

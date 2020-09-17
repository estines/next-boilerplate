import { wrapper } from "../redux";

const App = ({ Component, pageProps }: { Component: any; pageProps: any }) => {
  const Layout = Component.Layout;

  if (Layout) {
    return (
      <Layout {...pageProps}>
        <Component {...pageProps} />
      </Layout>
    );
  }

  return <Component {...pageProps} />;
};

export default wrapper.withRedux(App);

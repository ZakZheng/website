import App, { Container } from 'next/app';
import 'antd/dist/antd.css';
import Layout from '../components/Layout';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import store from '../store/store';

const theme = {
  colors: {
    primary: '#f95443',
  },
};

class MyApp extends App {
  static async getInitialProps({ ctx, Component }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <>
              <Layout />
              <Component {...pageProps} />
            </>
          </ThemeProvider>
        </Provider>
      </Container>
    );
  }
}

export default MyApp;

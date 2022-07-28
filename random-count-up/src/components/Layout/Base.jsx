import { Footer, Header } from 'components';

export const BaseLayout = (props) => (
  <>
    <Header />
    <main>{props.children}</main>
    <Footer />
  </>
);

export const WithoutFooterLayout = (props) => (
  <>
    <Header />
    <main>{props.children}</main>
  </>
);

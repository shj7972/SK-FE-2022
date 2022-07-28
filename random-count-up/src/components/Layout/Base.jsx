import { Footer, Header } from 'components';

export const BaseLayout = (props) => (
  <div>
    <Header />
    <main>{props.children}</main>
    <Footer />
  </div>
);

export const WithoutFooterLayout = (props) => (
  <div>
    <Header />
    <main>{props.children}</main>
  </div>
);

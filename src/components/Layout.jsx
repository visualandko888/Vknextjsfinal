import Header from './Layout/Header';
import Footer from './Layout/Footer';
import Cookies from './Layout/Cookies';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <Cookies />
    </>
  );
}

import Header from '/src/components/Layout/Header';
import Footer from '/src/components/Layout/Footer';
import Cookies from '/src/components/Layout/Cookies';

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


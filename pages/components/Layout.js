// import localFont from "@next/font/local";
import Navbar from './Navbar';
import Footer from './Footer';

// import styles from '../../styles/Home.module.css'

/* const myFont = localFont({
  src: "fonts/VOLVONOVUM-MEDIUM.TTF",
}); */

const RootLayout = ({ children }) => {
  return (
    <div>
      <Navbar></Navbar>
      <main>{children}</main>
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;

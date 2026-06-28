import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import NavBar from "./Navbar";
 
export default function Page() {
  return (
    <>
      <Header />
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}

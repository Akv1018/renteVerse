import { Outlet } from "react-router-dom";
import NavigationBar from "./Navbar/Navbar";
// import Footer from "./Footer/Footer";

function Layout() {
  return (
    <>
      <NavigationBar />

      <main>
        <Outlet />
      </main>

      {/* <Footer /> */}
    </>
  );
}

export default Layout;
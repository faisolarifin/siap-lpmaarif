import React from "react";
import Sidebar from './usersidebar';
import TopNavbar from './navbaruser';
import Footer from './footer';

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <div className="fragment">
        <TopNavbar />
        <Sidebar />
          <main>{children}</main>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Layout;
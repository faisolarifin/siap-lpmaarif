import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
      <div style={{ position:'fixed', top:0, bottom:0, overflow: 'scroll initial' }}>
        <CDBSidebar textColor="#000" backgroundColor="#fff" className="sidebar">
          <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
            <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
              Sidebar
            </a>
          </CDBSidebarHeader>
  
          <CDBSidebarContent className="sidebar-content pt-0">
            <CDBSidebarMenu>
              <NavLink exact to="/profile" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="columns">Profile</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/oss" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="table">Permohonan OSS</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/bhpnu" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="user">Permohonan BHPNU</CDBSidebarMenuItem>
              </NavLink>
            </CDBSidebarMenu>
          </CDBSidebarContent>
  
          <CDBSidebarFooter style={{ textAlign: 'center' }}>
            <div
              style={{
                padding: '20px 5px',
              }}
            >
              Siap LP Ma'arif v1.0
            </div>
          </CDBSidebarFooter>
        </CDBSidebar>
      </div>
    );
  };
  
  export default Sidebar;
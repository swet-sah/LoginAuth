import React from 'react';
import { CDBSidebar, CDBSidebarContent, CDBSidebarFooter, CDBSidebarHeader, CDBSidebarMenu, CDBSidebarMenuItem } from 'cdbreact';
import {Link }from 'react-router-dom';

const Sidebar = () => {
  return (
    <div style={{ display: 'flex', height: '145vh', overflow: 'scroll initial ', margin: '0' }}>
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
            Sidebar
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <CDBSidebarMenuItem icon="columns"><Link to='/dashboard'>Dashboard</Link></CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="table"><Link to='/tables'>Tables</Link></CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="user"><Link to='/profile'>Profile page</Link></CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="chart-line"><Link to='/analytics'>Analytics</Link></CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="exclamation-circle"><Link to='/'>404 page</Link></CDBSidebarMenuItem>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div style={{ padding: '20px 5px' }}>Sidebar Footer</div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;

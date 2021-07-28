import React from "react";
import Link from 'next/link'
export default function dashboard() {
  return (
    <div>
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        {/* Sidebar - Brand */}
        <Link href="/admin">
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          
        >
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink" />
          </div>
          <div className="sidebar-brand-text mx-3">
            Centrum Admin
          </div>
        </a>
        </Link>
        {/* Divider */}
        <hr className="sidebar-divider my-0" />
        {/* Nav Item - Dashboard */}
        <Link href="/admin">
        <li className="nav-item active">
          <a className="nav-link">
            <i className="bi bi-speedometer2 fs-5" />
            <span className="fs-5">Dashboard</span>
          </a>
        </li>
        </Link>
        {/* Divider */}
        <hr className="sidebar-divider" />
        {/* Heading */}
        <div className="sidebar-heading">Interface</div>
        {/* Nav Item - Pages Collapse Menu */}
        <Link href="/produk">
        <li className="nav-item">
          <a className="nav-link" >
            <i className="bi bi-basket fs-6" />
            <span className="fs-6">Produk</span>
          </a>
        </li>
        </Link>
        {/* Nav Item - Utilities Collapse Menu */}
       <Link href="/order">
       <li className="nav-item">
          <a className="nav-link" href="">
            <i className="bi bi-book fs-6" />
            <span className="fs-6">Order</span>
          </a>
        </li>
       </Link>
        {/* Nav Item - Pages Collapse Menu */}
       <Link href="/user">
       <li className="nav-item">
          <a className="nav-link">
            <i className="bi bi-people-fill fs-6" />
            <span className="fs-6">User</span>
          </a>
        </li>
       </Link>
        {/* Nav Item - Charts */}
        {/* Divider */}
        <hr className="sidebar-divider d-none d-md-block" />
        {/* Sidebar Toggler (Sidebar) */}
        {/* Sidebar Message */}
      </ul>
    </div>
  );
}

import React from "react";

const SideNav = () => {
  const username = sessionStorage.getItem("givenName");
  const avatarUrl = sessionStorage.getItem("imageUrl");
  return (
    <div>
      {/* Main Sidebar Container */}
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        {/* Brand Logo */}
        <a href="index3.html" className="brand-link">
          <img
            src="data:image/png;base64,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"
            alt="AdminLTE Logo"
            className="brand-image img-circle elevation-8"
            style={{ opacity: ".8" }}
          />
          <span className="brand-text font-weight-light">Portal Paciente</span>
        </a>
        {/* Sidebar */}
        <div className="sidebar">
          {/* Sidebar user panel (optional) */}
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img
                src={avatarUrl}
                className="img-circle elevation-2"
                alt="User Image"
              />
            </div>
            <div className="info">
              <a href="#" className="d-block">
                {username}
              </a>
            </div>
          </div>
          {/* SidebarSearch Form */}

          {/* Sidebar Menu */}
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
              <li class="nav-item">
                <a href="../dashboard" class="nav-link">
                  <i class="nav-icon fas fa-home"></i>
                  <p>
                    Início
                    {/* <span class="badge badge-info right">2</span> */}
                  </p>
                </a>
              </li>
              <li class="nav-item">
                <a href="../meuspedidos" class="nav-link">
                  <i class="nav-icon fas fa-capsules"></i>
                  <p>
                    Seus Pedidos
                    {/* <span class="badge badge-info right">2</span> */}
                  </p>
                </a>
              </li>
              <li class="nav-item">
                <a href="../ofertas" class="nav-link">
                  <i class="nav-icon far fa-calendar-alt"></i>
                  <p>
                    Ofertas
                    {/* <span class="badge badge-info right">2</span> */}
                  </p>
                </a>
              </li>
            </ul>
          </nav>
          {/* /.sidebar-menu */}
        </div>
        {/* /.sidebar */}
      </aside>
    </div>
  );
};

export default SideNav;

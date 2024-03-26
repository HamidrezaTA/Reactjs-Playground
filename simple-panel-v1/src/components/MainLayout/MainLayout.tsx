import { Outlet, NavLink } from "react-router-dom";

function MainLayout() {
  return (
    <>
      <div className="row">
        <div className="col-2 mt-2">
          <ul className="list-group list-group-flush">
            <NavLink
              to={"/itemslist"}
              className={({ isActive }) =>
                isActive ? "list-group-item active" : "list-group-item"
              }
            >
              Items List
            </NavLink>
            <NavLink
              to={"/createitem"}
              className={({ isActive }) =>
                isActive ? "list-group-item active" : "list-group-item"
              }
            >
              Create Item
            </NavLink>
            <li className="list-group-item">Logout</li>
          </ul>
        </div>
        <div className="col-10 mt-2">
          <div>
            <h3 className="text-center">Welcome to the Panel</h3>
          </div>
          <div className="row">
            <div className="col-12">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainLayout;

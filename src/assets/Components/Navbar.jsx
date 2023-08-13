import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="table-title">
            <div className="row">
                <div className="col-sm-5">
                    <h2>Store
                        <b>Management</b>
                    </h2>
                </div>
                <div className="col-sm-7">
                    <NavLink to="/add" className="btn btn-secondary">
                        <i className="material-icons"></i>
                        <span>Add New User</span>
                    </NavLink>
                    <NavLink to="/" className="btn btn-secondary">
                        <i className="material-icons"></i>
                        <span>Store Items</span>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Navbar;

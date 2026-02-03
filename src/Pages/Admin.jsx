import AdminCard from "../components/AdminCard";
import AdminNavbar from "../components/AdminNavbar";

import AdminPending from "../components/AdminPending";

const Admin = () => {
    return (
      <div className="bg-[#f7f6f6]">
        <AdminNavbar/>
        <AdminCard/>
        <AdminPending/>
       
      </div>
    )
}
export default Admin;
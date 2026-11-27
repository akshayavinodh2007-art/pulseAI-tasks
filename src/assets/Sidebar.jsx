
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-56 min-h-screen bg-white shadow-md p-5">

      <h2 className="text-xl font-bold text-teal-700 mb-8">
        Menu
      </h2>

      <ul className="space-y-5">

        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/patients">Patients</Link></li>
        <li><Link to="/doctors">Doctors</Link></li>
        <li><Link to="/appointments">Appointments</Link></li>
        <li><Link to="/billing">Billing</Link></li>
        <li><Link to="/beds">Bed Management</Link></li>

      </ul>

    </aside>
  );
};

export default Sidebar;

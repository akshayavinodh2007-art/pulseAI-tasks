
import React from "react";

const Sidebar = () => {
  return (
    <aside className="bg-white w-56 min-h-screen shadow-md p-5">

      <h2 className="text-xl font-bold text-green-700 mb-8">
        MedAxis
      </h2>

      <ul className="space-y-5 text-gray-600">

        <li >
           Dashboard
        </li>

        <li >
           Patients
        </li>

        <li >
          Doctors
        </li>

        <li >
           Appointments
        </li>

        <li >
           Laboratory
        </li>

        <li >
           Pharmacy
        </li>

        <li >
           Bed Management
        </li>

        <li >
           Billing
        </li>

        <li >
           Settings
        </li>

      </ul>

    </aside>
  );
};

export default Sidebar;


import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./assets/Header";
import Sidebar from "./assets/Sidebar";
import Footer from "./assets/Footer";

import Dashboard from "./assets/Dashboard";
import Patient from "./assets/Patient";
import Doctor from "./assets/Doctor";
import Appointment from "./assets/Appointment";
import Billing from "./assets/Billing";
import Bedmanagement from "./assets/Bedmanagement";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <div className="flex">
        <Sidebar />

        <main className="flex-1 p-6">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/patients" element={<Patient />} />
            <Route path="/doctors" element={<Doctor />} />
            <Route path="/appointments" element={<Appointment />} />
            <Route path="/billing" element={<Billing />} />
            <Route path="/beds" element={<Bedmanagement />} />
          </Routes>
        </main>
      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;

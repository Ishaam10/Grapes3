import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">

      <Navbar />

      {/* Main content expands to fill screen */}
      <main className="flex-1 bg-[#132F4B]">
        <Outlet />
      </main>

      <Footer />

    </div>
  );
}
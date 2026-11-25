import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-[#FFFDF5] text-black">
      <Header />
      <main className="pt-16 pb-12">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
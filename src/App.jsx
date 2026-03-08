import { Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import AssetDetail from "./pages/AssetDetail";
import Explore from "./pages/Explore";
import Home from "./pages/Home";
import Learn from "./pages/Learn";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  const { pathname } = useLocation();
  const isAuthRoute = pathname === "/signin" || pathname === "/signup";

  return (
    <div className={`min-h-screen ${isAuthRoute ? "bg-[#060b16] text-white" : "bg-white text-slate-950"}`}>
      {!isAuthRoute ? <Navbar /> : null}
      <main className="overflow-x-clip">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/asset/:assetId" element={<AssetDetail />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </main>
      {!isAuthRoute ? <Footer /> : null}
    </div>
  );
}

export default App;

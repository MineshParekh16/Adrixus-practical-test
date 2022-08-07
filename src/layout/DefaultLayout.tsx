import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import CommonNavbar from "../components/CommonNavbar";
import Dashboard from "../components/dashboard/Dashboard";
import Login from "../components/login/Login";
import SignUp from "../components/sign-up/SignUp";
import { RootState } from "../redux/store";
import { DashBoardRoute } from "../routes/DashBoardRoute";
import Loader from "../shared/Loader";
import PublicRoutes from "./PublicRoutes";

const DefaultLayout = () => {
  const isLoading = useSelector((state: RootState) => state.loader.isLoading);

  const useAuth = () => {
    const user = localStorage.getItem("rowData");
    if (user) {
      return true;
    } else {
      return false;
    }
  };

  const user = useAuth();
  
  return (
    <main className="main-container">
      {user && (
        <>
          <CommonNavbar />
        </>
      )}
      <Routes>
        <Route path="/" element={<PublicRoutes />}>
          <Route path="/" element={<Login />} />
        </Route>
        <Route path="/sign-up" element={<PublicRoutes />}>
          <Route path="/sign-up" element={<SignUp />} />
        </Route>
        {/* Dashboard page route */}
        <Route path="/Dashboard" element={<DashBoardRoute />}>
          <Route
            path="/Dashboard"
            element={
              localStorage.getItem("rowData") == null ? (
                <Navigate to="/" />
              ) : (
                <Dashboard />
              )
            }
          />
        </Route>
        <Route path="*" element={<h1>This Page Not Found</h1>} />
      </Routes>
      {isLoading && <Loader />}
    </main>
  );
};

export default DefaultLayout;

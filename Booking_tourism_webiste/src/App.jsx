import "./App.css";

import "react-toastify/dist/ReactToastify.css";
import Main from "./components/Main";
import Main2 from "./components/Main2";
import { BrowserRouter, Route, Routes,Router } from "react-router-dom";
import SignupSigIn from "./components/SignupSigIn";
import Admin from "./components/Admin";
import Bookings from "./components/Bookings";
import ProtectedRoute from "./ProtectedRoute";
import { AuthProvider, useAuth } from "./AuthContext";
import Services from "./components/Service";
import AboutUs from "./components/AboutUs";

//main application router where we used react router dom version 6.0
function App() {
  
  

  return (
    //Auth provider made using context api
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main /> }>
            <Route index element={<Main2 />} />
            <Route path="signup" element={<SignupSigIn /> } />
            {/* <Route path="/admin" element={<Admin />} /> */}
            <Route path="admin" element={
              //this route helps for role based routing
              <ProtectedRoute roles={'admin'}>
                <Admin />
              </ProtectedRoute>
            } />
            <Route path="bookings" element={<Bookings /> } />
            <Route path="aboutus" element={<AboutUs /> } />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
    // <div className="appcontainer">
      
    //   <Main/>
      
    // </div>
  );
}

export default App;

import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Navbar from "./components/Navbar";

import { useAuthContext } from "./hooks/useAuthContext";
import SignedIn from "./components/SignedIn";
import SignedOut from "./components/SignedOut";
import Page404 from "./pages/page404/Page404";

function App() {
  const { isAuthReady } = useAuthContext();
  return (
    <div className="App">
      {isAuthReady && (
        <BrowserRouter>
          <Navbar />
          <Routes>
            {/* This route will make sure that the home will be accesible only when signed in  */}
            <Route
              exact
              path="/"
              element={
                <SignedIn>
                  <Home />
                </SignedIn>
              }
            />

            {/* This check will make sure if the user is signed in, it will not allow to get into the login or signup page */}
            <Route
              path="/login"
              element={
                <SignedOut>
                  <Login />
                </SignedOut>
              }
            />
            <Route
              path="/signup"
              element={
                <SignedOut>
                  <Signup />
                </SignedOut>
              }
            />

            <Route path="*" element={<Page404 />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;

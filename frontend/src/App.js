import { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./views/Login";
import MessagePopupBox from "./Helper/MessagePopupBox";
import { Grid, makeStyles } from "@material-ui/core";
import SignUpPage from "./views/Signup";
import HomePage from "./views/Home";
import AddJob from "./views/Employer/AddJob";
import Jobs from "./views/Employer/Jobs";
import Logout from "./views/Logout";
import NavBar from "./views/NavBar";

const useStyles = makeStyles((theme) => ({
  body: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "98vh",
    paddingTop: "64px",
    boxSizing: "border-box",
    width: "100%",
  },
}));

export const PopupContext = createContext();
function App() {
  const styles = useStyles();
  const [popup, setPopup] = useState({
    isOpen: false,
    severity: "",
    message: "",
  });

  return (
    <BrowserRouter>
      <PopupContext.Provider value={setPopup}>
        <Grid container direction="column">
          <Grid item>{/* <NavBar /> */}</Grid>
          <Grid item>
            <Routes>
              <Route path="/" element={<LoginPage />}></Route>
              <Route path="/login" element={<LoginPage />}></Route>
              <Route path="/signup" element={<SignUpPage />}></Route>
              <Route path="/home" element={<HomePage />}></Route>
              <Route path="/addjob" element={<AddJob />}></Route>
              <Route exact path="/jobs" element={<Jobs />}></Route>
              <Route exact path="/logout" element={<Logout />}></Route>
            </Routes>
          </Grid>
        </Grid>
      </PopupContext.Provider>
      <MessagePopupBox
        open={popup.isOpen}
        setOpen={(status) =>
          setPopup({
            ...popup,
            isOpen: status,
          })
        }
        severity={popup.severity}
        message={popup.message}
      />
    </BrowserRouter>
  );
}

export default App;

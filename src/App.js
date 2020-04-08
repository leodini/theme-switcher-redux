import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Creator } from "./store/layoutReducer";
import "./App.css";

function App() {
  const theme = useSelector((state) => state.layoutReducer.theme);
  const dispatch = useDispatch();

  const changeTheme = () => {
    theme === "theme-light"
      ? dispatch(Creator.darkTheme())
      : dispatch(Creator.lightTheme());
  };

  return (
    <div className={`container ${theme}`}>
      <h1>Theme Switcher</h1>
      <label id="switch" className="switch">
        <input type="checkbox" id="slider" onClick={changeTheme} />
        <span className="slider round"></span>
      </label>
    </div>
  );
}

export default App;

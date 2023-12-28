import React from "react";
import styles from "./app.module.css";
import { MasterCraft } from "./components/masterCraft/MasterCraft";
import Header from "./components/header/Header";
function App() {
  return (
    <div className={styles.mainApp}>
      <Header/>
      <MasterCraft />
    </div>
  );
}

export default App;

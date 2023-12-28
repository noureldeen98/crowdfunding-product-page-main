import styles from "./app.module.css";
import { MasterCraft } from "./components/masterCraft/MasterCraft";
function App() {
  return (
    <div className={styles.mainApp}>
      <MasterCraft />
    </div>
  );
}

export default App;

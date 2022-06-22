import './global.css';
import {Header} from './components/header/Header'
import {Sidebar} from './components/sidebar/Sidebar'
import styles from './app.module.css';

function App() {

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
      <Sidebar />
      <main></main>
      </div>
    </>
  )
}

export default App

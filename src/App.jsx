import './global.css'
import { Header } from './components/header/Header'
import styles from './app.module.css';

function App() {

  return (
    <>
    <Header />
    <div className={styles.wrapper}>
      <aside></aside>
      <main></main>
    </div>
    </>
  )
}

export default App

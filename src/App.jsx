import './global.css';
import { Header } from './components/header/Header'
import { Sidebar } from './components/sidebar/Sidebar'
import { Post } from './components/post/Post';

import styles from './app.module.css';

function App() {

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post />
          <Post />
        </main>
      </div>
    </>
  )
}

export default App

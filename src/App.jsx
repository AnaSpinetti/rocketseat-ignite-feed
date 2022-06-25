import './global.css';
import { Header } from './components/header/Header'
import { Sidebar } from './components/sidebar/Sidebar'
import { Post } from './components/post/Post';

import styles from './app.module.css';

function App() {

  const posts = [
    {
      id: 1,
      author: {
        avatarUrl: 'http://github.com/diego3g.png',
        name: 'Diego Fernandes',
        role: 'CTO'
      },
      content: [
        {type: 'paragraph', content: 'Pac-Man Inky bashfull orange dots blue enemies ghosts Toru Iwatani Puck Man power up. She was disgusted he couldnt tell the difference between lemonade and limeade. The old apple revels in its authority. The beauty of the sunset was obscured by the industrial cranes. Pac-Man Namco Toru Iwatani Pac-Man Fever maze dots. Poison ivy grew through the fence they said was impenetrable.' },
        {type: 'paragraph', content: 'Pac-Man Inky bashfull orange dots blue enemies ghosts Toru Iwatani Puck Man power up. Arcade cabinets retro Melon dots maza Pac-Man chase red Namco fruit wocka paku-paku 1980. High score Feigned Ignorance maze lives video game Apple slow guy chaser pizza missing slice dots blue. Fluffy pink unicorns are a popular status symbol among macho men. I think I will buy the red car, or I will lease the blue one.' }
      ],
      publishedAt: new Date('2022-05-03 20:00:00')
    },
    {
      id: 2,
      author: {
        avatarUrl: 'http://github.com/anaspinetti.png',
        name: 'Ana Spinetti',
        role: 'CTO'
      },
      content: [
        {type: 'paragraph', content: 'Pac-Man Inky bashfull orange dots blue enemies ghosts Toru Iwatani Puck Man power up. She was disgusted he couldnt tell the difference between lemonade and limeade. The old apple revels in its authority. The beauty of the sunset was obscured by the industrial cranes. Pac-Man Namco Toru Iwatani Pac-Man Fever maze dots. Poison ivy grew through the fence they said was impenetrable.' },
        {type: 'paragraph', content: 'Pac-Man Inky bashfull orange dots blue enemies ghosts Toru Iwatani Puck Man power up. Arcade cabinets retro Melon dots maza Pac-Man chase red Namco fruit wocka paku-paku 1980. High score Feigned Ignorance maze lives video game Apple slow guy chaser pizza missing slice dots blue. Fluffy pink unicorns are a popular status symbol among macho men. I think I will buy the red car, or I will lease the blue one.' }
      ],
      publishedAt: new Date('2022-05-03 20:00:00')
    },
    {
      id: 3,
      author: {
        avatarUrl: 'http://github.com/diego3g.png',
        name: 'Teste3',
        role: 'CTO'
      },
      content: [
        {type: 'paragraph', content: 'Pac-Man Inky bashfull orange dots blue enemies ghosts Toru Iwatani Puck Man power up. She was disgusted he couldnt tell the difference between lemonade and limeade. The old apple revels in its authority. The beauty of the sunset was obscured by the industrial cranes. Pac-Man Namco Toru Iwatani Pac-Man Fever maze dots. Poison ivy grew through the fence they said was impenetrable.' },
        {type: 'paragraph', content: 'Pac-Man Inky bashfull orange dots blue enemies ghosts Toru Iwatani Puck Man power up. Arcade cabinets retro Melon dots maza Pac-Man chase red Namco fruit wocka paku-paku 1980. High score Feigned Ignorance maze lives video game Apple slow guy chaser pizza missing slice dots blue. Fluffy pink unicorns are a popular status symbol among macho men. I think I will buy the red car, or I will lease the blue one.' }
      ],
      publishedAt: new Date('2022-05-03 20:00:00')
    },
  ];



  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {
            posts.map(post => {
              return (
              <Post key={post.id} author={post.author} content={post.content} publishedAt={post.publishedAt} />
              )
            })
          }
        </main>
      </div>
    </>
  )
}

export default App

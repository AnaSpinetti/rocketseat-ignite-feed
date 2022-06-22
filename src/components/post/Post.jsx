import styles from './post.module.css'

export function Post() {
    return (
        <>
            <article className={styles.post}>
                <header>
                    <div className={styles.author}>
                        <img src="https://github.com/anaspinetti.png" className={styles.avatar} />
                        <div className={styles.authorInfo}>
                            <string>Ana Spinetti</string>
                            <span>Teste</span>
                        </div>

                    </div>
                        <time dateTime="2022-05-11 08:13:00">Publicado há 1h</time>
                </header>

                <div className={styles.content}>
                    <p>
                        Pac-Man Inky bashfull orange dots blue enemies ghosts Toru Iwatani Puck Man power up. She was disgusted he couldn’t tell the difference between lemonade and limeade. The old apple revels in its authority. The beauty of the sunset was obscured by the industrial cranes. Pac-Man Namco Toru Iwatani Pac-Man Fever maze dots. Poison ivy grew through the fence they said was impenetrable.
                    </p>
                    <p>
                        Pac-Man Inky bashfull orange dots blue enemies ghosts Toru Iwatani Puck Man power up. Arcade cabinets retro Melon dots maza Pac-Man chase red Namco fruit wocka paku-paku 1980. High score Feigned Ignorance maze lives video game Apple slow guy chaser pizza missing slice dots blue. Fluffy pink unicorns are a popular status symbol among macho men. I think I will buy the red car, or I will lease the blue one.
                    </p>
                </div>
            </article>
        </>
    )
}
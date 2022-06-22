import { Trash } from 'phosphor-react';
import styles from './comment.module.css';

export function Comment(){
    return (
        <div className={styles.comment}>
            <img src="https://github.com/anaspinetti.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Ana Spinetti</strong>
                            <time dateTime="2022-05-11 08:13:00">Publicado há 1h</time>
                        </div>

                        <button tittle="Deletar Comentário">
                            <Trash size={20} />
                        </button>
                    </header>

                    <p>Muito bom, parabens!</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}
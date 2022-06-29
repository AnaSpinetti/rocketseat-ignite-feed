import { Trash } from 'phosphor-react';
import { ThumbsUp } from 'phosphor-react';
import styles from './comment.module.css';
import { useState } from 'react'

export function Comment({content, deleteComment}){
    const [likes, setLikes] = useState(0)

    function handleDeleteComment(){
        deleteComment(content)
    }

    function handleLike(){
        setLikes(likes + 1)
    }

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

                        <button onClick={handleDeleteComment} tittle="Deletar Comentário">
                            <Trash size={20} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLike}>
                        <ThumbsUp size={20} />
                        Aplaudir <span >{likes}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}
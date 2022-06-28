import { Avatar } from '../avatar/Avatar'
import { Comment } from '../comment/comment'
import {format, formatDistanceToNow } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'
import styles from './post.module.css'
import { useState } from 'react'

export function Post(props) {
    const [comments, setComments] = useState(['Muito bom'])

    const publishedDateFormatted = format(props.publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {locale: ptBr});
    const publishedDateRelativeToNow = formatDistanceToNow(props.publishedAt,{
        locale: ptBr,
        addSuffix: true
    })

    function handleCreateNewComment(){
        event.preventDefault()
        // const newCommentText = ''
        console.log(event.target.comment)

        //setComments([...comments, newCommentText])
    }

    return (
        <>
            <article className={styles.post}>
                <header>
                    <div className={styles.author}>
                        <Avatar src={props.author.avatarUrl} />
                        <div className={styles.authorInfo}>
                            <string>{props.author.name}</string>
                            <span>{props.author.role}</span>
                        </div>

                    </div>
                        <time tittle={publishedDateFormatted} dateTime={props.publishedAt.toISOString()}>
                        {publishedDateRelativeToNow}
                        </time>
                </header>

                <div className={styles.content}>
                    {props.content.map(e => {
                        if(e.type === 'paragraph'){
                            return <p>{e.content}</p>
                        }else if(e.type === 'link'){
                            return <p><a href="#">{e.content}</a></p>
                        }
                    })}
                </div>
                    <br/>
                <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                    <strong>Deixe seu feedback</strong>
                    <textarea 
                        nome='comment'
                        placeholder='Deixe seu comentário'
                    />
                    <button type='submit'>Publicar</button>
                </form>
            <div className={styles.commentList}>
                {comments.map(comentario => {
                    return <Comment content={comentario} />
                })}
            </div>
            </article>
        </>
    )
}
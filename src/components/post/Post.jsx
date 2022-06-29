import { Avatar } from '../avatar/Avatar'
import { Comment } from '../comment/comment'
import {format, formatDistanceToNow } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'
import styles from './post.module.css'
import { useState } from 'react'

export function Post(props) {
    const [comments, setComments] = useState([])
    const [newCommentText, setNewCommentText] = useState('')

    const publishedDateFormatted = format(props.publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {locale: ptBr});
    const publishedDateRelativeToNow = formatDistanceToNow(props.publishedAt,{
        locale: ptBr,
        addSuffix: true
    })

    function handleNewCommentChange(){
        
        setNewCommentText(event.target.value)
    }

    function handleCreateNewComment(){
        event.preventDefault()
        const newCommentText = event.target.comment.value

        setComments([...comments, newCommentText])
        setNewCommentText('');
    }

    function deleteComment(commentToDelete){
        const listWithoutCommentDeleted = comments.filter(comment => {
            return comment !== commentToDelete
        })
        setComments(listWithoutCommentDeleted)
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
                        name='comment'
                        placeholder='Deixe seu comentário'
                        onChange={handleNewCommentChange}
                        value={newCommentText}
                        required
                    />
                    <button type='submit'>Publicar</button>
                </form>
            <div className={styles.commentList}>
                {comments.map(comment => {
                    return <Comment key={comment} content={comment} deleteComment={deleteComment} />
                })}
            </div>
            </article>
        </>
    )
}
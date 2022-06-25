import styles from './sidebar.module.css'
import {PencilLine} from 'phosphor-react'
import { Avatar } from '../avatar/Avatar'


export function Sidebar(){
    return (
        <>
            <aside className={styles.sidebar}>
                <img src='../../../images/cover.jpg' className={styles.cover} />

                <div className={styles.profile}>
                    {/* <img src='https://github.com/anaspinetti.png' className={styles.avatar} /> */}
                    <Avatar src='https://github.com/anaspinetti.png' />
                    <strong>Nome</strong>
                    <span>Cargo</span>
                </div>

                <footer>
                    <a href='#'>
                        <PencilLine size={20} />
                        Editar seu perfil
                    </a>
                </footer>
            </aside>
        </>
    )
}
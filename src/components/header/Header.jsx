import styles from './header.module.css'

export function Header(){
    return (
        <>
            <header className={styles.header}>
                <img src="../../../images/IgniteSimbol.svg"></img>
                <h3>Ignite Feed</h3>
            </header>
        </>
    )
}
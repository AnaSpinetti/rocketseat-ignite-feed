import styles from './header.module.css'
import igniteLogo from '../../../images/IgniteSimbol.svg'

export function Header(){
    return (
        <>
            <header className={styles.header}>
                <img src={igniteLogo} alt='Logotipo do ignite'></img>
                <h3>Ignite Feed</h3>
            </header>
        </>
    )
}
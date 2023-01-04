
import Ad from './Ad';
import MainComp from './MainComp';
import styles from './styles.module.scss';
import Top from './Top';

export default function Header() {
    return (
        <header className={styles.header}>
            <Ad />
            <Top />
            <MainComp />
        </header>
    )
}


import Ad from './Ad';
import MainComp from './MainComp';
import styles from './styles.module.scss';
import Top from './Top';

export default function Header({ country }) {
    return (
        <header className={styles.header}>
            <Ad />
            <Top country={country} />
            <MainComp />
        </header>
    )
}

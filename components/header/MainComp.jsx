import Link from 'next/link';
import styles from './styles.module.scss';
import Logo from '../.././public/shoppayLogo.png'

export default function MainComp() {
    return (
        <div className={styles.main}>
            <div className={styles.main__container}>
                <Link href='/'>
                    <a className={styles.logo}>
                        <img src={Logo} alt='' />
                    </a>
                </Link>
            </div>
        </div>
    )
}
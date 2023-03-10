import Link from 'next/link';
import { RiSearch2Line } from 'react-icons/ri';
import { FaOpencart } from 'react-icons/fa';
import styles from './styles.module.scss';
import { useSelector } from 'react-redux';

export default function MainComp() {
    const {cart} = useSelector((state) => ({...state}) )
    console.log(cart.length)
    return (
        <div className={styles.main}>
            <div className={styles.main__container}>
                <Link legacyBehavior href='/'>
                    <a className={styles.logo}>
                        <img src='../../../shoppayLogo.png' alt='' />
                    </a>
                </Link>
                <div className={styles.search}>
                    <input type="text" placeholder='Search' />
                    <div className={styles.search__icon}>
                        <RiSearch2Line />
                    </div>
                </div>
                <div className={styles.cart}>
                    <Link legacyBehavior href="/cart">
                        <a className={styles.cart} href="">
                            <FaOpencart />
                            <span>{cart.length}</span>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}
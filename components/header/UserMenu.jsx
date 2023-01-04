import Link from 'next/link';
import styles from './styles.module.scss';

export default function UserMenu({ loggedIn }) {
    return (
        <div className={styles.menu}>
            <h4>Welcome to AprilZeroNine!</h4>
            {loggedIn ? (
                <div className={styles.flex}>
                    <image className={styles.menu__img} src="https://i.ibb.co/rmKkPsd/profile.jpg" alt="profile" />
                    <div className={styles.col}>
                        <span>Welcome Back,</span>
                        <h3>Hashirama</h3>
                        <span>Sign Out</span>
                    </div>
                </div>
            ) : (
                <div className={styles.flex}>
                    <button className={styles.btn_primary}>Register</button>
                    <button className={styles.btn_outlined}>Login</button>
                </div>
            )}
            <ul>
                <li>
                    <Link href="/profile">Account</Link>
                </li>
                <li>
                    <Link href="/profile/orders">Orders</Link>
                </li>
                <li>
                    <Link href="/profile/messages">Message Center</Link>
                </li>
                <li>
                    <Link href="/profile/address">Address</Link>
                </li>
                <li>
                    <Link href="/profile/wishlist">Wishlist</Link>
                </li>
            </ul>
        </div>
    )
}

import { useState } from 'react';
import styles from './styles.module.scss';
import {MdSecurity} from 'react-icons/md'
import {BsSuitHeart} from 'react-icons/bs'
import {RiAccountPinCircleLine, RiArrowDropDownFill} from 'react-icons/ri'
import Link from 'next/link';
import UserMenu from './UserMenu';

export default function Top() {
    const [loggedIn, setLoggedIn] = useState(false)
    return (
        <div className={styles.top}>
            <div className={styles.top__container}>
                <div></div>
                <ul className={styles.top__list}>
                    <li>
                        <img src='https://i.ibb.co/jycVGm2/NIgeria.png' alt='Nigeria' />
                        <span>Nigeria / Ngn</span>
                    </li>
                    <li>
                        <MdSecurity />
                        <span>Buyer Protection</span>
                    </li>
                    <li>
                        <span>Customer Service</span>
                    </li>
                    <li>
                        <span>Help</span>
                    </li>
                    <li>
                        <BsSuitHeart />
                        <Link href="/profile/wishlist">Wishlist</Link>
                    </li>
                    <li>
                        {loggedIn ? (
                            <li>
                                <div className={styles.flex}>
                                    <img src="https://i.ibb.co/rmKkPsd/profile.jpg" alt="profile" />
                                    <span>Hashirama</span>
                                    <RiArrowDropDownFill />

                                </div>
                            </li>
                        ) : (
                            <li>
                                <div className={styles.flex}>
                                    <RiAccountPinCircleLine />
                                    <span>Account</span>
                                    <RiArrowDropDownFill />
                                </div>
                            </li>
                        )}
                        <UserMenu LoggedIn={loggedIn}/>
                    </li>
                </ul>
            </div>
        </div>
    )
}

/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import styles from './styles.module.scss';
import {MdSecurity} from 'react-icons/md'
import {BsSuitHeart} from 'react-icons/bs'
import {RiAccountPinCircleLine, RiArrowDropDownFill} from 'react-icons/ri'
import Link from 'next/link';
import UserMenu from './UserMenu';

export default function Top({ country }) {
    const [loggedIn, setLoggedIn] = useState(true);
    const [visible, setVisible] = useState(true);
    return (
        <div className={styles.top}>
            <div className={styles.top__container}>
                <div></div>
                <ul className={styles.top__list}>
                    <li className={styles.li}>
                        <img src={country.flag} alt='Nigeria' />
                        <span>{country.name} / {country.countryCode}</span>
                    </li>
                    <li className={styles.li}>
                        <MdSecurity />
                        <span>Buyer Protection</span>
                    </li>
                    <li className={styles.li}>
                        <span>Customer Service</span>
                    </li>
                    <li className={styles.li}>
                        <span>Help</span>
                    </li>
                    <li className={styles.li}>
                        <BsSuitHeart />
                        <Link style={{
                            color: 'inherit'                      }} 
                            href="/profile/wishlist">
                            <span>Wishlist</span>
                        </Link>
                    </li>
                    <li className={styles.li} 
                        onMouseOver={() => setVisible(true)}
                        onMouseLeave={() => setVisible(false)}
                    >
                        {loggedIn ? (
                            <li className={styles.li}>
                                <div className={styles.flex}>
                                    <image src="https://i.ibb.co/rmKkPsd/profile.jpg" alt="profile" />
                                    <span>Hashirama</span>
                                    <RiArrowDropDownFill />

                                </div>
                            </li>
                        ) : (
                            <li className={styles.li}>
                                <div className={styles.flex}>
                                    <RiAccountPinCircleLine />
                                    <span>Account</span>
                                    <RiArrowDropDownFill />
                                </div>
                            </li>
                        )}
                        {
                            visible && <UserMenu loggedIn={loggedIn}/>
                        }
                    </li>
                </ul>
            </div>
        </div>
    )
}

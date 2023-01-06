import styles from '../styles/signin.module.scss';
import Footer from '../components/footer'
import Header from '../components/header'
import BiLeftArrowAlt from 'react-icons/bi'

export default function signin() {
  return (
    <>
      <Header />
      <div className={styles.login}>
        <div className={styles.login__container}>
          <div className={styles.login__header}>
            <div className={styles.back__svg}>
              <BiLeftArrowAlt />
            </div>
          </div>
        </div>
      </div>
      <Footer country="Nigeria" />
    </>
  )
}

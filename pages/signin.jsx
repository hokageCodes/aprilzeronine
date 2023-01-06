import styles from '../styles/signin.module.scss';
import Footer from '../components/footer'
import Header from '../components/header'
import {BiLeftArrowAlt} from 'react-icons/bi'
import Link from 'next/link'
import { Form, Formik } from 'formik';
import LoginInput from '../components/inputs/loinInput/loginInput';

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
            <span>Please Join Us !</span> <Link href="/">Go to Sore</Link>
          </div>
          <div className={styles.login__form}>
            <h1>Sign In</h1>
            <p>Get access to the best fashion online store</p>
            <Formik action="">
              {
                (form) => (
                  <Form>
                   <LoginInput icon="email"/>
                  </Form>
                )
              }
            </Formik>
          </div>
        </div>
      </div>
      <Footer country="Nigeria" />
    </>
  )
}

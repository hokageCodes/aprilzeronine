/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import { useState } from 'react';
import styles from '../styles/signin.module.scss';
import Footer from '../components/footer'
import Header from '../components/header'
import {BiLeftArrowAlt} from 'react-icons/bi'
import Link from 'next/link'
import { Form, Formik } from 'formik';
import * as Yup from 'yup'
import LoginInput from '../components/inputs/loinInput/loginInput';
import CircledIconBtn from '../components/buttons/circledIconBtn';
import { getProviders } from 'next-auth/react';

const initialValues = {
  login_email: "",
  login_password: "",
}

export default function signin({ providers }) {
  console.log(providers)
  const [user, setUser] = useState(initialValues);
  const { login_email, login_password } = user;
  console.log(user)

  const loginValidation = Yup.object({
    login_email: Yup.string()
      .required("Email address is required")
      .email("Please enter a valid email address"),
    login_password: Yup.string().required("Please enter a valid password")
  })

  const handleChange = (e) => {
    const {name, value} = e.target;
    setUser({...user, [name]: value})
  }
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
            <Formik
              enableReinitialize
              initialValues={{
                login_email,
                login_password,
              }}
              validationSchema={loginValidation}
            >
              {
                (form) => (
                  <Form>
                    <LoginInput
                      type="text"
                      name="login_email"
                      placeholder="Email Address"
                      icon="email"
                      onChange={handleChange}
                    />

                    <LoginInput
                      type="password"
                      name="login_password"
                      placeholder="Password"
                      icon="password"
                      onChange={handleChange}
                    />
                    <CircledIconBtn 
                      text="Sign In"
                      type="submit" 
                    />
                    <div className={styles.forgot}>
                      <Link href="/">Forgot Password?</Link>
                    </div>
                  </Form>
                )
              }
            </Formik>
            <div className={styles.login__socials}>
              <span className={styles.or}>Or Continue with</span>
              <div className={styles.login__socials_wrap}>
              {
                providers.map((provider) => (
                  <div key={provider.name}>

                    <button 
                      className={styles.social__btn} 
                      onClick={() => signIn(provider.id)}>
                      <img src={`../../icons/${provider.name}.png`} alt='' />
                      Sign in with {provider.name}</button>
                  </div>
                ))
              }
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer country="Nigeria" />
    </>
  )
}


export async function getServerSideProps(context) {
  const providers = Object.values(await getProviders());
  return {
    props: {
      providers
    }
  }
}

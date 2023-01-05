import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Header from '../components/header'
import Footer from '../components/footer'
import axios from 'axios'


export default function Home({ country }) {
  console.log(country)
  return (
    <>
      <Header country={country}/>
      <Footer country={country}/>
    </>
  )
}

export async function getServerSideProps() {
  let data = await axios
  .get('https://api.ipregistry.co/?key=86goyptzilxd8ccv')
  .then((res) => {
    return res.data.location.country;
  }) .catch((err) => {
    console.log(err)
  })
  return {
    props: {
      country: { name: data.name, flag: data.flag.emojitwo, countryCode: data.code }
    }
  }
}

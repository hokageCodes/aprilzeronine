import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Header from '../components/header'
import Footer from '../components/footer'
import axios from 'axios'


export default function Home() {
  return (
    <>
      <Header />
      <Footer />
    </>
  )
}

export async function getServerSideProps() {
  let data = await axios
    .get('https://api.ipregistry.co/66.165.2.7?key=h2n3cj3vxdbiy3o1')
    .then((res) => {
      return res.data.location.country
    }) .catch((err) => {
      console.log(err)
    })
  console.log(data)
}

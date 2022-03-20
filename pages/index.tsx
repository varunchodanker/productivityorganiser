import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar'
import { Box } from '@mui/material'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Productivity Organiser</title>
        <meta name="description" content="Productivity organiser" />
      </Head>
      <NavBar></NavBar>
      <main>
        <Box id = "contentArea">
          This is where the content will go.
        </Box>
      </main>

      <footer>
        
      </footer>
    </>
  )
}

export default Home

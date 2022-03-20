import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar'
import { Box } from '@mui/material'

import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDatePicker from '@mui/lab/StaticDatePicker';
import React from 'react'

const Home: NextPage = () => {
  const [targetDate, setTargetDate] = React.useState<Date | null>(new Date());

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
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <StaticDatePicker<Date>
              orientation="portrait"
              openTo="day"
              value={targetDate}
              onChange={(newTargetDate) => {
                setTargetDate(newTargetDate);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Box>
      </main>

      <footer>
        
      </footer>
    </>
  )
}

export default Home

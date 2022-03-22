import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar'
import { Box, Tab, Tabs, Typography } from '@mui/material'

import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDatePicker from '@mui/lab/StaticDatePicker';
import React from 'react'

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Home: NextPage = () => {
  const [targetDate, setTargetDate] = React.useState<Date | null>(new Date());

  const [chosenTab, setChosenTab] = React.useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newChosenTab: number) => {
    setChosenTab(newChosenTab);
  };

  return (
    <>
      <Head>
        <title>Productivity Organiser</title>
        <meta name="description" content="Productivity organiser" />
      </Head>
      <NavBar></NavBar>
      <main>
        <Box id = "contentArea">
          <Box className = "halfMainArea">
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
          <Box className = "halfMainArea">
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={chosenTab} onChange={handleTabChange} aria-label="basic tabs example">
                <Tab label="Item One" {...a11yProps(0)} />
                <Tab label="Item Two" {...a11yProps(1)} />
                <Tab label="Item Three" {...a11yProps(2)} />
              </Tabs>
            </Box>
            <TabPanel value={chosenTab} index={0}>
              Item One
            </TabPanel>
            <TabPanel value={chosenTab} index={1}>
              Item Two
            </TabPanel>
            <TabPanel value={chosenTab} index={2}>
              Item Three
            </TabPanel>
          </Box>
        </Box>
      </main>

      <footer>
        
      </footer>
    </>
  )
}

export default Home

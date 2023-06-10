import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
// @mui
import { styled, alpha } from '@mui/material/styles';
import { Box, Card, Grid, Container, Typography, CardHeader, CardContent } from '@mui/material';

// chartjs
import BarChart from "../components/chart_chartjs/BarChart";

// components
import { useSettingsContext } from '../components/settings';
// sections
import { ChartColumnMultiple, ChartLine } from '../sections/chart';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2, 5),
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  backgroundColor: 'white',
}));

const UserData = [
  {
    id: 1,
    year: 2016,
    userGain: 80000,
    userLost: 823,
  },
  {
    id: 2,
    year: 2017,
    userGain: 45677,
    userLost: 345,
  },
  {
    id: 3,
    year: 2018,
    userGain: 78888,
    userLost: 555,
  },
  {
    id: 4,
    year: 2019,
    userGain: 90000,
    userLost: 4555,
  },
  {
    id: 5,
    year: 2020,
    userGain: 4300,
    userLost: 234,
  },
];

export default function PageOne() {
  const { themeStretch } = useSettingsContext();

  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        // label: "Users",
        data: UserData.map((data) => data.userGain),
        backgroundColor: "#E8E8E8",
        borderRadius: 10,
        barThickness: 10,
        borderWidth: 1,
        categoryPercentage: 0.4,
      },
      {
        label: "",
        data: UserData.map((data) => data.userGain),
        backgroundColor: "#DA0D18",
        borderRadius: 10,
        barThickness: 10,
        borderWidth: 1,
      },
    ],
  });
  return (
    <>
      <Helmet>
        <title> Page One | Minimal UI</title>
      </Helmet>

      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Grid container spacing={2} sx={{ mb: '40px' }}>
          <Grid item xs={8}>
            <StyledRoot>
              <Grid container spacing={2} alignItems='center'>
                <Grid item xs={8}>
                  <Typography variant='h3'>
                    Welcome Vikram
                  </Typography>
                  <Typography gutterBottom>
                    Here’s an overview of your gamyly activities
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <img
                    src="/assets/icons/navbar/admin_home_gamely.png"
                    alt="Gamely"
                    loading="lazy"
                    style={{ float: 'right' }}
                  />
                </Grid>
              </Grid>
            </StyledRoot>
          </Grid>
        </Grid>

        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ mb: '40px' }}>
          <Grid item xs={2} sm={4} md={4}>
            <StyledRoot>
              <Grid container spacing={2} alignItems='center'>
                <Grid item xs={8}>
                  <Typography>
                    Total creator sign up
                  </Typography>
                  <Typography variant='h4'>
                    $53,000
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <img
                    src="/assets/icons/navbar/Icon_note.png"
                    alt="Gamely"
                    loading="lazy"
                    style={{ float: 'right' }}
                  />
                </Grid>
              </Grid>
            </StyledRoot>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <StyledRoot>
              <Grid container spacing={2} alignItems='center'>
                <Grid item xs={8}>
                  <Typography>
                    Sign up Last 24 Hours
                  </Typography>
                  <Typography variant='h4'>
                    2,300 +5%
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <img
                    src="/assets/icons/navbar/Icon_users.png"
                    alt="Gamely"
                    loading="lazy"
                    style={{ float: 'right' }}
                  />
                </Grid>
              </Grid>
            </StyledRoot>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <StyledRoot>
              <Grid container spacing={2} alignItems='center'>
                <Grid item xs={8}>
                  <Typography>
                    Active creators
                  </Typography>
                  <Typography variant='h4'>
                    3,052 -14%
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <img
                    src="/assets/icons/navbar/Icon_users.png"
                    alt="Gamely"
                    loading="lazy"
                    style={{ float: 'right' }}
                  />
                </Grid>
              </Grid>
            </StyledRoot>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <StyledRoot>
              <Grid container spacing={2} alignItems='center'>
                <Grid item xs={8}>
                  <Typography>
                    Total App download
                  </Typography>
                  <Typography variant='h4'>
                    $173,000
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <img
                    src="/assets/icons/navbar/Icon_download.png"
                    alt="Gamely"
                    loading="lazy"
                    style={{ float: 'right' }}
                  />
                </Grid>
              </Grid>
            </StyledRoot>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <StyledRoot>
              <Grid container spacing={2} alignItems='center'>
                <Grid item xs={8}>
                  <Typography>
                    Total Active users
                  </Typography>
                  <Typography variant='h4'>
                    $173,000
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <img
                    src="/assets/icons/navbar/Icon_users2.png"
                    alt="Gamely"
                    loading="lazy"
                    style={{ float: 'right' }}
                  />
                </Grid>
              </Grid>
            </StyledRoot>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <StyledRoot>
              <Grid container spacing={2} alignItems='center'>
                <Grid item xs={8}>
                  <Typography>
                    Total money added
                  </Typography>
                  <Typography variant='h4'>
                    $173,000
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <img
                    src="/assets/icons/navbar/Icon_$bag.png"
                    alt="Gamely"
                    loading="lazy"
                    style={{ float: 'right' }}
                  />
                </Grid>
              </Grid>
            </StyledRoot>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={6}>
                <Card dir="ltr">
                  <CardHeader title="Income overview" sx={{float:'left'}} />
                  <CardContent>
                    <ChartColumnMultiple />
                  </CardContent>
                </Card>
          </Grid>
          <Grid item xs={6}>
            <Card dir="ltr">
              <CardHeader title="Overall user Activity" />
              <CardContent>
                <ChartLine />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

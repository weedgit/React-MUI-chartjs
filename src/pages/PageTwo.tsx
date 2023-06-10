import { Helmet } from 'react-helmet-async';
import { useState } from "react";
// @mui
import { Box, Card, Grid, Container, Typography, CardHeader, CardContent, Button, TextField, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';

// components
import { useSettingsContext } from '../components/settings';
import Searchbar from "../layouts/dashboard/header/Searchbar";
// sections
import SortingSelecting from '../sections/table/sorting-selecting';

// ----------------------------------------------------------------------

export default function PageTwo() {
  const { themeStretch } = useSettingsContext();
  const [open, setOpen] = useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <>
      <Helmet>
        <title> Page Two | Minimal UI</title>
      </Helmet>

      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Grid container columns={12} sx={{ mt: '3%' }}>
          <Grid item md={10}>
            <Typography>
              Here is a list of all your gamely admins.
            </Typography>
          </Grid>
          <Grid item md={2}>
            <Button variant="contained" sx={{ width: '100%', height: '80px' }} onClick={() => handleClickOpen()}><img src='/assets/icons/navbar/plus.png' alt='plus' /></Button>
          </Grid>
        </Grid>

        <Grid container columns={12} sx={{ mt: '3%' }}>
          <Grid item md={11}>
            <Card dir="ltr">
              <CardContent sx={{ p: '0' }}>
                <Grid sx={{ backgroundColor: '#F8F9FA', p: '1%', verticalAlign: 'center' }} columns={12} alignItems='center'>
                  <TextField id="outlined-search" label="Search field" type="search" size='small' inputProps={{ 'aria-label': 'search' }} />
                  <Button sx={{ float: 'right', color: '#8A8A8A', backgroundColor: 'white', border: '1px solid #DCDEE6', borderRadius: '0' }}><img src='/assets/icons/navbar/refresh.png' alt='refresh' />Refresh</Button>
                </Grid>
                <Grid>
                  <SortingSelecting />
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

      </Container>

      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogTitle sx={{ borderBottom: '1px solid gray' }} alignItems='center'>
          <h4>Add Admin</h4>
          <img src="/assets/icons/navbar/warning.png" alt="warning" style={{float:'right'}}/>
        </DialogTitle>

        <DialogContent sx={{ ml: '23%' }}>
          <DialogContentText id="alert-dialog-description">
            Are you sure want to delete this admin?
          </DialogContentText>
        </DialogContent>

        <DialogActions sx={{ mr: '31%' }}>
          <Button variant='contained' onClick={handleClose}>No</Button>
          <Button sx={{ backgroundColor: '#FFE3D6', color: 'Linear button' }} onClick={handleClose} autoFocus>
            Yes, delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

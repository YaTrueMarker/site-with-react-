import React from 'react';
import Button from '@material-ui/core/Button';
import { AppBar, BottomNavigation, Box, Card, CardActions, CardContent, CardMedia, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, IconButton, Paper, TextField, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';


// import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

import LayerIcon from '@material-ui/icons/Layers';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import { makeStyles } from '@material-ui/core/styles'

// import TextField from '@material-ui/core/TextField';
// import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';


const useStyles = makeStyles((theme) => ({
  root: {
    FlexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(1)
  },
  title: {
    flexGrow: 1
  },
  mainFeaturesPost: {
    position: "relative",
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right:0,
    left:0,
    backgroundoverlay: "rgba(0,0,0,.3)"
  },
  mainFeaturesPostContent: {
    position: "relative",
    padding: theme.spacing(9),
    marginTop: theme.spacing(8),
  },
  CardMedia: {
    paddingTop: "56.25%",
    backgroundColor: "rgb(241, 219, 192)",
  },
  CardContent: {
    flexGrow: 1,
    backgroundColor: "rgb(241, 219, 192)",
  },
  CardGrid: {
    marginTop: theme.spacing(4),
  }
}))

const cards = [1,2,3,4,5,6,7,8,9]

function App() {
  const [value, setValue] = React.useState('recents')
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
  }

  return (
    <>
   <AppBar position='fixed'>
      <Container fixed>
          <Toolbar>
            <IconButton edge="start"  color="inherit" aria-laabel="menu" className={classes.menuButton}>
              <MenuIcon/>
            </IconButton>
            <Typography variant="h6" className={classes.title}>Designer</Typography>
            <Box mr={8}>
              <Button color="inherit" variant="outlined" onClick={handleClickOpen}>check it</Button>

              <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id='form-dialog-title'>Log in</DialogTitle>
                  <DialogContent>
                    <DialogContentText>Log in to see more</DialogContentText>
                    <TextField 
                      autoFocus
                      margin='dense'
                      id='name'
                      label="Email Adress"
                      type="email"
                      fullWidth
                    />
                      <TextField 
                      autoFocus
                      margin='dense'
                      id='password'
                      label="Password"
                      type="password"
                      fullWidth
                    />
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose} color="primery">Cancel</Button>
                    <Button onClick={handleClose} color="primery">LOg in</Button>
                  </DialogActions>
              </Dialog>

            </Box>
            <Box mr={8}>
              <Button color="secondary" variant="contained">more</Button>
            </Box>
          </Toolbar>
      </Container>
   </AppBar>
    
    
    <main>
      <Paper className={classes.mainFeaturesPost} 
      style={{ backgroundImage: 'url(https://source.unsplash.com/random)'}}>
        <Container fixed >
          <div className={classes.overlay}/>
          <Grid container>
            <Grid item md='4'>
              <div className={classes.mainFeaturesPost}>
                <Typography
                component="h1"
                variant="h3"
                color="inherit"
                gutterBottom
                >
                  Designer
                </Typography>
                <Typography
                variant="h5"
                color="inherit"
                paragraph
                >
                  Do anything for make greate world and
                  just doing this how you think this saw 
                  like unreal beautiful 
                </Typography>
                <Button variant='contained' color='secondary'>
                  Learn more...
                </Button>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Paper>
      <div className={classes.mainContent}>
        <Container maxWidth="md">
          <Typography variant="h2" aligan="center" color="textPrimary" gutterBottom>Designer</Typography>
          <Typography variant="h3" aligan="center" color="textSecondary" paragraph>Do anything for make greate world and
                  just doing this how you think this saw 
                  like unreal beautiful anything for make greate world and</Typography>
          <div className={classes.mainButton}>
            <Grid container spacing={2} justifyContent="center">
              <Grid item>
                <Button variant="contained" color="primery">Start now</Button>               
              </Grid>
              <Grid item>
                <Button variant="outlined" color="secondary">learn more</Button> 
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}> 
          {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.CardMedia}
                  image="https://source.unsplash.com/random"
                  title="Image title"
                />
                <CardContent className={classes.CardContent}>
                   <Typography variant='h5' gutterBottom>
                    Blog post
                   </Typography>
                   <Typography >
                    Same alse do it nothing making heroses it to enemy 
                   </Typography>
                </CardContent>
                <CardActions>
                  <Button size='small'color='primery'>
                    View
                  </Button>
                  <Button size='small'color='primery'>
                    Edit
                  </Button>

                  <LayerIcon />
                  <PlayCircleFilledIcon />
                </CardActions>
              </Card>
            </Grid>  
          ))}
        </Grid>
      </Container>
    </main>
    <footer>
      <Typography variant='h6' align='center' gutterBottom>Посмотреть также</Typography>
      <BottomNavigation
        value={value}
        onChange={handleChange}
        className={classes.root}
      >
          <BottomNavigation 
            label='Recents'
            value='recents'
            icon={<RestoreIcon />}
          />
           <BottomNavigation 
            label='Favorites'
            value='Favorites'
            icon={<FavoriteIcon />}
          />
           <BottomNavigation 
            label='Nearby'
            value='Nearby'
            icon={<LocationOnIcon />}
          />
           <BottomNavigation 
            label='Folder'
            value='Folder'
            icon={<FolderIcon />}
          />
      </BottomNavigation>
      <Typography align='center' color='textSecondary' component='p' variant='subtitle1'>
        this is conceptual site for people whose upper your mind and saw more
      </Typography>
    </footer>
   </>
  );
}

export default App;

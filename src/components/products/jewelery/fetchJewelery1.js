import j1 from "./jeweleryimages/1.png";
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});


export default function Jewelery1() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia style={{width: '50%', height: 'auto'}}
            className={classes.media}
            component="img"
            alt="Jewelery"
            image={j1}
            title="John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="h2">
              John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                    Price: 695$  
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
            <FetchJewelery1 />
        </CardActions>
      </Card>
    </React.Fragment>
  );
}
function FetchJewelery1() {
    const [open, setOpen] = React.useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
      <React.Fragment>
        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
          Details
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Title: John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
            Description: From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.
            </DialogContentText>
            <DialogContentText id="alert-dialog-description">
              Phone No.: 0302-2597648
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary" autoFocus>
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    );
  }

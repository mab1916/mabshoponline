import j4 from "./jeweleryimages/4.jpg";
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


export default function Jewelery2() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia style={{width: '50%', height: 'auto'}}
            className={classes.media}
            component="img"
            alt="Jewelery"
            image={j4}
            title="Pierced Owl Rose Gold Plated Stainless Steel Double"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="h2">
              Pierced Owl Rose Gold Plated Stainless Steel Double
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                    Price: 110$  
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
            <FetchJewelery4 />
        </CardActions>
      </Card>
    </React.Fragment>
  );
}
function FetchJewelery4() {
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
          <DialogTitle id="alert-dialog-title">{"Title: Pierced Owl Rose Gold Plated Stainless Steel Double"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
            Description: Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel
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

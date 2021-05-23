import j2 from "./jeweleryimages/2.jpg";
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
            image={j2}
            title="Solid Gold Petite Micropave"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="h2">
              Solid Gold Petite Micropave
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                    Price: 168$  
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
            <FetchJewelery2 />
        </CardActions>
      </Card>
    </React.Fragment>
  );
}
function FetchJewelery2() {
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
          <DialogTitle id="alert-dialog-title">{"Title: Solid Gold Petite Micropave"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
            Description: Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.
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

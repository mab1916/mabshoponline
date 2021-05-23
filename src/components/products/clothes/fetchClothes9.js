import c9 from "./clothesimages/9.jpg";
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


export default function Clothes1() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia style={{width: '50%', height: 'auto'}}
            className={classes.media}
            component="img"
            alt="Electronics"
            image={c9}
            title="Opna Women's Short Sleeve Moisture"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="h2">
              Opna Women's Short Sleeve Moisture
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                    Price: 8$  
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
            <FetchClothes1 />
        </CardActions>
      </Card>
    </React.Fragment>
  );
}
function FetchClothes1() {
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
          <DialogTitle id="alert-dialog-title">{"Title: Opna Women's Short Sleeve Moisture"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
            Description: 100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort
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

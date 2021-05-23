import e5 from "./electronicsimage/5.png";
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


export default function Electronics1() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia style={{width: '50%', height: 'auto'}}
            className={classes.media}
            component="img"
            alt="Electronics"
            image={e5}
            title="Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="h2">
              Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                    Price: 599$  
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
            <FetchElectronics1 />
        </CardActions>
      </Card>
    </React.Fragment>
  );
}
function FetchElectronics1() {
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
          <DialogTitle id="alert-dialog-title">{"Title: Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
            Description: 21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz
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

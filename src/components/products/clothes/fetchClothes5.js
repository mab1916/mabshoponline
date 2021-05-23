import c5 from "./clothesimages/5.jpg";
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
            image={c5}
            title="BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="h2">
              BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                    Price: 57$  
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
          <DialogTitle id="alert-dialog-title">{"Title: BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
            Description: Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates
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

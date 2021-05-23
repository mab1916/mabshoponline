import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function About() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Question 1" {...a11yProps(0)} />
          <Tab label="Question 2" {...a11yProps(1)} />
          <Tab label="Question 3" {...a11yProps(2)} />
          <Tab label="Question 4" {...a11yProps(3)} />
          <Tab label="Question 5" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <h3>What is M.A.B?</h3>
        <p>
            M.A.B is a online shop where you can sell some of your product and buy someone else products by looking at there product details.
        </p>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <h3>How Many Products can be Post in it to Sell?</h3>
        <p>As many as you want.</p>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <h3>How can I contact with the buyer of the Product?</h3>
        <p>You can contact the buyer through our online chat for better communication and for safety protocol. You can also contact him/her buy calling him/her from the phone no. given in details.</p>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <h3>Does payment of a product is made online in this website?</h3>
        <p>No, this website do not have any payment procedure. Both the Buyer and Seller should meet each other and they can decide that how they will do the payment.</p>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <h3>How long our product can be in it until someone buy it?</h3>
        <p>Your Product will be in our website for only 1 Year. If it have not been sell to someone then it will be removed from our website and you will get the notification from us when this happens?</p>
      </TabPanel>
    </div>
  );
}

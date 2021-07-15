import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, List, ListItem, Grid } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import PinterestIcon from '@material-ui/icons/Pinterest';

import { Image } from 'components/atoms';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 0),
    [theme.breakpoints.up('md')]: {
     // padding: theme.spacing(6, 0),
    },
    //background: theme.palette.background.footer,
    backgroundColor: '#000228',
  },
  footerContainer: {
    maxWidth: theme.layout.contentWidth,
    width: '100%',
    margin: '0 auto',
   // padding: theme.spacing(0, 2),
    margin: 'auto',
    maxWidth: '1280px',
    color: 'white', 
  }
}));

const Footer = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <div className={classes.footerContainer}>
          <Grid 
          container
          justify="space-between"
           >
             <Grid item>
                <p>Copyright © Torrantal Asia. All rights reserved.</p>               
            </Grid>
            <Grid item style={{textDecoration:"none", color: "white"}}>
            <p > 
            <a style={{ color: "white",textDecoration: "none"}} href="#">Terms of use</a>
            &nbsp;|&nbsp;
             {/* <a onclick="ga('send','event','link','click','/privacy-policy')" href="/privacy-policy/">Privacy policy</a>  */}
            <a  style={{ color: "white",textDecoration: "none"}} href="#">Privacy policy</a>
            </p>
            </Grid>  
          </Grid>
      </div>
    </div>
  );
};
Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;

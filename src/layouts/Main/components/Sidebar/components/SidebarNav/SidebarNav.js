/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  List,
  ListItem,
  Typography,
  ListItemIcon,
  Button,
} 
from '@material-ui/core';


const useStyles = makeStyles(theme => ({
  root: {
  },
  listItem: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    textTransform:'uppercase',
  },
  listItemIcon: {
    minWidth: 'auto',
  },
  listItemLink: {
    textDecoration: 'none',
  },
  closeIcon: {
    justifyContent: 'flex-end',
    cursor: 'pointer',
  },
  divider: {
    width: '100%',
  },
  sub_menu: {
    backgroundColor: '#0669f9',
    boxShadow: 'none',
    display: 'flex',
    flexDirection: 'column',
    marginLeft: -200,
    padding: '20',
    top: '90%',
    width: 410,
    position: 'absolute',
  },
  li:{
    display: 'block',
    textAlign: 'center',
    width: '100%',
    marginBottom: 20,
  },
}));

const SidebarNav = props => {
  const { onClose, className, ...rest } = props;
  const classes = useStyles();

  return (
    <List {...rest} className={clsx(classes.root, className)}>
      <ListItem className={classes.listItem}>
        <Typography
          variant="h6"
          color="primary"
          component="a"
          href="/home"
          className={classes.listItemLink}
        >
          Home
        </Typography>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Typography
          variant="h6"
          color="primary"
          component="a"
          // href="/signup-simple"
          className={classes.listItemLink}
        >
          About Us
        </Typography>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Typography
          variant="h6"
          color="primary"
          component="a"
          // href="/not-found"
          className={classes.listItemLink}
        >
          SERVICES
        </Typography>
          <ul className = {classes.sub_menu}>
          <li><a href="#">
            HIGH PERFORMANCE CLOUD DEPLOYMENT</a></li>
          </ul>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Button
          size="large"
          variant="contained"
          color="primary"
          fullWidth
          component="a"
          target="blank"
          href="https://material-ui.com/store/items/the-front-landing-page/"
        >
          Upgrade Now
        </Button>
      </ListItem>
    </List>
  );
};

SidebarNav.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
};

export default SidebarNav;

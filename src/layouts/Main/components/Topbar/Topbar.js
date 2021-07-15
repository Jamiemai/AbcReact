import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  Toolbar,
  Hidden,
  List,
  ListItem,
  Typography,
  IconButton,
  Button,
  Grid,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import styled from "styled-components";
import { Image } from 'components/atoms';

const useStyles = makeStyles(theme => ({
  root: {},
  flexGrow: {
    flexGrow: 1,
    fontFamily: '"noto-sans-display-condensed",sans-serif',
    maxWidth: theme.layout.contentWidth,
  },
  navigationContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
    backgroundColor:'none' ,
    //width: '100%',
  },
  toolbar: {
    maxWidth: theme.layout.contentWidth,
    width: '100%',
    margin: '0 auto',
    padding: theme.spacing(0, 2),
  },
  listItem: {
    cursor: 'pointer',
    paddingTop: 0,
    paddingBottom: 0,
    // color: '#fff',
  },
  listItemText: {
    flex: '0 0 auto',
    whiteSpace: 'nowrap',
    textDecoration: 'none',
    textTransform:'uppercase',
    color: 'white',
  },
  listItemButton: {
    whiteSpace: 'nowrap',
  },
  iconButton: {
    padding: 0,
    '&:hover': {
      background: 'transparent',
    },
  },
  logoContainer: {
   // backgroundColor: '#3f3f3f',
    maxWidth: '270px',
    marginTop:20,
    marginBottom:20,
  },
  logoImage: {
    verticalAlign: 'middle',
    borderStyle: 'none',
    width: '100%',
    height: 'auto',
  },
  sub_menu: {
    backgroundColor: '#0669f9',
    boxShadow: 'none',
    display: 'flex',
    flexDirection: 'column',
    marginLeft: -200,
    //padding: '20',
    top: '90%',
    width: 410,
    position: 'absolute',
    float: 'none',
  },
  li:{  
    display: 'block',
    textAlign: 'center',
    width: '100%',
    marginBottom: 20,
  },

  // dropdown_content: {
  //   display: 'none',
  //   position: 'absolute',
  //   backgroundColor: '#f1f1f1',
  //   minWidth: '160',
  //   boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
  // },
}));
export const Nav  = styled.nav`
padding: 0;
z-index: 5;
position: relative;
display: -ms-flexbox;
display: flex;
-ms-flex-wrap: wrap;
flex-wrap: wrap;
-ms-flex-align: center;
align-items: center;
-ms-flex-pack: justify;
justify-content: space-between;
flex-basis: 100%;
`
const StyledLi = styled.li`
font-family: 'noto-sans-display-condensed',sans-serif;
  float: none;
  &:hover {
    font-weight:bold; 
  }
  
`;

const DropDownContent = styled.div`
  // font-family: 'noto-sans-display-condensed',sans-serif;
   display: none;
   position: absolute;
   background-color: #0669f9;
   width: 410px;
   top: 90%;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  //z-index: 1;
  text-decoration: none;
  ::before
  {
    content: "";
    position: absolute;
    bottom: 100%;
    //left: 47%;
    width: 0;
    height: 0;
    border-left: 13px solid transparent;
    border-bottom: 15px solid #0669f9;
    border-right: 13px solid transparent;
  }
`;

const DropDownLi = styled(StyledLi)`
  display: inline-block;
  &:hover ${DropDownContent} {
    display: block;
  }
`;

const Suba = styled.a`
  color: white;
  display: block;
  font-family: 'noto-sans-display-condensed';
  font-size: 1.25em;
  font-style: normal;
  font-weight: 400;
  line-height: 1.4;
  outline: none;
  width: 100%;
  padding: 0;
  text-decoration: none;
  
  &:hover {
    color: #f7931e;
  }
`;
const Header = styled.li`
background-color: none;
`

const Topbar = props => {
  const { onSidebarOpen, ...rest } = props;

  const classes = useStyles();

  return (
    <Toolbar disableGutters className={classes.toolbar} {...rest}>

      <div className={classes.logoContainer}>
        <a href="/home" title="TORRANTAL&nbsp;ASIA">
          <Image
            className={classes.logoImage}
            //src="/images/logos/logo-white.png"
            alt="TORRANTAL&nbsp;ASIA"
            //lazy={false}
            // style={{ maxWidth: '25'}}
          />
        </a>
      </div>

      <Nav >
      <Grid 
        container
        spacing={0} 
        justifyContent="space-between"
        // direction="column"
        >
       <Grid 
      item xs={4}
      style={{paddingRight: '390px'}}
      >
      <div className={classes.logoContainer}>
        <a href="/home" title="TORRANTAL&nbsp;ASIA">
          <img src="https://torrantal.asia/wp-content/uploads/logo-white.png" 
          data-src="https://torrantal.asia/wp-content/uploads/logo-white.png" 
           alt="TORRANTAL ASIA" 
           style={{width: '270px'}}
           className={classes.logoImage}
          //  style={{justifyContent: 'flex-end'}}
          ></img>
          {/* <Image
            className={classes.logoImage}
            src="/images/logos/logo-white.png"
            alt="TORRANTAL&nbsp;ASIA"
            // lazy={false}
            //  style={{ width: '270'}}
          /> */}
        </a>
      </div>
      </Grid>


      <Grid 
      item xs={8}
       container
      direction="row"
      justifyContent="flex-end"
      alignItems="center"
      >
      <div className={classes.flexGrow} />
      <Hidden smDown>
        <List className={classes.navigationContainer}>
          <ListItem className={classes.listItem}>
            <Typography
                  variant="body1"
                  component="a"
                  className={classes.listItemText}
            >
              Home
            </Typography>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Typography
                  variant="body1"
                  component="a"
                  className={classes.listItemText}
            >
              ABOUT US
            </Typography>

          </ListItem>
          <ListItem>
              <DropDownLi>
              <div>
                  <Typography
                  variant="body1"
                  //color="primary"
                  component="a"
                  // href="/not-found"
                  className={classes.listItemText}
                  >
                  Service
                </Typography>
              </div>
              <DropDownContent>
                <ul className = {classes.sub_menu}>
                <li hover className = {classes.li} ><Suba href="#">
                  HIGH PERFORMANCE CLOUD DEPLOYMENT</Suba></li>
                <li className = {classes.li} ><Suba href="#" >
                  DIGITAL MANAGEMENT SERVICES</Suba></li>
                  <li className = {classes.li} ><Suba href="#">
                  ENTERPRISE-CLASS DATA & CYBER SECURITY</Suba></li>
                  <li className = {classes.li} ><Suba href="#">
                  COLLABORATIVE WEB DEVELOPMENT</Suba></li>
                  <li className = {classes.li} ><Suba href="#">
                  CLOUD NATIVE COMPUTING</Suba></li>
              </ul>
              </DropDownContent>
            </DropDownLi>
          </ListItem>
          <ListItem>
              <DropDownLi>
              <div>
                  <Typography
                  variant="body1"
                 // color="primary"
                  component="a"
                  // href="/not-found"
                  className={classes.listItemText}
                  >
                  INDUSTRIES
                </Typography>
              </div>
              <DropDownContent>
                <ul className = {classes.sub_menu}>
                <li hover className = {classes.li} ><Suba href="#">
                E-COMMERCE BUSINESSES</Suba></li>
                <li className = {classes.li} ><Suba href="#" >
                FINANCIAL INSTITUTIONS</Suba></li>
                <li className = {classes.li} ><Suba href="#">
                  GOVERNMENT ORGANIZATIONS</Suba></li>
                <li className = {classes.li} ><Suba href="#">
                DIGITAL AGENCIES</Suba></li>
                <li className = {classes.li} ><Suba href="#">
                NEWS & MEDIA COMPANIES</Suba></li>
              </ul>
              </DropDownContent>
            </DropDownLi>
          </ListItem>
          <ListItem>
          <Typography
                  variant="body1"
                  //color="primary"
                  component="a"
                  // href="/not-found"
                  className={classes.listItemText}
                  >
                  Contact us
            </Typography>
          </ListItem>
        </List>
      </Hidden>
      </Grid>
      </Grid>
      </Nav>
      <Hidden mdUp>
        <IconButton
          className={classes.iconButton}
          onClick={onSidebarOpen}
          aria-label="Menu"
        >
          <MenuIcon />
        </IconButton>
      </Hidden>
    </Toolbar>
  );
};

Topbar.propTypes = {
  onSidebarOpen: PropTypes.func,
};

export default Topbar;

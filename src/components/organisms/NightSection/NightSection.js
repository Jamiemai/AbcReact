import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: theme.layout.contentWidth,
    backgroundColor: '#000228',
    width: '100%',
    height: '100%',
    // margin: '0 auto',
    margin: 'auto',
    // padding: theme.spacing(6, 2),
    // [theme.breakpoints.up('sm')]: {
    //   padding: theme.spacing(12, 2),
    // },
  },
  fullWidth: {
    maxWidth: '100%',
    height: '100%'
  },
  disablePadding: {
    padding: 0,
  },
  narrow: {
    maxWidth: 800,
  },
}));

/**
 * Component to display the NightSections
 *
 * @param {Object} props
 */
const NightSection = props => {
  const {
    children,
    fullWidth,
     narrow,
    disablePadding,
    alternate,
    className,
    ...rest
  } = props;

  const classes = useStyles();

  return (
    <section
      className={clsx(
        'section',
        classes.root,
        fullWidth ? classes.fullWidth : {},
         narrow ? classes.narrow : {},
        disablePadding ? classes.disablePadding : {},
        alternate ? classes.alternate : {},
        className,
      )}
      {...rest}
    >
      {children}
    </section>
  );
};

NightSection.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * Children to placed inside the section
   */
  children: PropTypes.node,
  /**
   * Should show narrow sections
   */
  narrow: PropTypes.bool,
  /**
   * Should the nightsection be full width
   */
  fullWidth: PropTypes.bool,
  /**
   * Should the nightsection render with no padding
   */
  disablePadding: PropTypes.bool,
};

export default NightSection;

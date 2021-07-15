import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Form } from './components';
import { SectionHeader } from 'components/molecules';
import { Section } from 'components/organisms';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {},
  formContainer: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: `calc(100vh - ${theme.mixins.toolbar['@media (min-width:600px)'].minHeight}px)`,
    maxWidth: 500,
    margin: `0 auto`,
  },
  section: {
    paddingTop: 0,
    paddingBottom: 0,
  },
}));

const UserInfo = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Section className={classes.section}>
        <div className={classes.formContainer}>
        <Typography component="h1" variant="h5">
          Account Edit
        </Typography>
          <SectionHeader
            //title="Sign up"
            // subtitle="Create beautiful marketing websites in hours instead of weeks."
            titleProps={{
              variant: 'h3',
            }}
          />
          <Form />
        </div>
      </Section>
    </div>
  );
};

export default UserInfo;

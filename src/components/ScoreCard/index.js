import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    minWidth: 275,
    textAlign: 'center'
  },
  cardTitle: {
    marginBottom: 38
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

function SimpleCard(props) {
  const { classes } = props;

  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.cardTitle} variant="headline" component="h2">
            Click on an image to earn points, if you click on a image twice you loose
          </Typography>
          <Typography variant="Display 1" component="h3">
            Current Score: {props.currentScore}<br />
            Top Score: {props.topScore}<br />
            {props.winOrLoseMessage}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);









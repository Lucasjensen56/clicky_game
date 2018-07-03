import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import cards from "../../cards.json"
import Grid from '@material-ui/core/Grid';
 





const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 600,
    height: 550,
  },

});




class GuttersGrid extends React.Component {
  state = {
    spacing: '16',
  };

  handleChange = key => (event, value) => {
    this.setState({
      [key]: value,
    });
  };



  render(props) {
    const { classes } = this.props;
    const { spacing } = this.state;

    return (
      <Grid container className={classes.root} spacing={16}>
        <Grid item xs={12}>
          <Grid container  justify="center" spacing={Number(spacing)}>
            {cards.map(card => (
              <Grid key={card} item
              className="card" 
              value={card.id}
              onClick={() => this.props.handleClick(card.id)} 

              >
                <img src={(window.location.origin + card.image)} alt={card.title}/>
              </Grid>
            ))}
          </Grid>
        </Grid>
        
      </Grid>
    );
  }
}

GuttersGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GuttersGrid);










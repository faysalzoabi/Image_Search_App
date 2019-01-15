import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});
export class ImageResults extends Component { 
  state = {
    open:false,
    currentImage:''
  }

  handleOpen = img => {
    this.setState({ open:true, currentImage:img  });
  }

  handleClose = () => {
    this.setState({ open:false  });
  }

  render() {
    const { classes, images} = this.props;
    console.log('img',images)
    return (
      <div className={classes.root}>
        {images.length > 0 ? (
          <GridList cols={3}>
          {images.map(tile => (
            <GridListTile key={tile.id}>
              <img src={tile.largeImageURL} alt={tile.tags} />
              <GridListTileBar
                title={tile.tags}
                subtitle={<span>by: {tile.user}</span>}
                actionIcon={
                  <IconButton onClick={()=> this.handleOpen(tile.largeImageURL)} className={classes.icon}>
                    <InfoIcon color="white"/>
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
        </GridList>
          ) : null}

          <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
         
          <DialogContent>
            <img src={this.state.currentImage} alt=""/>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary" autoFocus>
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return{
        images: state.images
    }
}
export default connect(mapStateToProps)(withStyles(styles)(ImageResults))

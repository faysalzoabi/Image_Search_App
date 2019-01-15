import React, { Component } from 'react'
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputBase from '@material-ui/core/InputBase';
import { connect } from 'react-redux';
import {fetchData, clearImages} from '../../store/actions'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
})

class Search extends Component {
    state={
        searchImage:'',
    }

  handleChange = event => {
    const val = event.target.value
    this.setState({ [event.target.name]: val }, () =>{
      if(val === ''){
        this.props.dispatch(clearImages())
      } else{
        this.props.dispatch(fetchData(this.state.searchImage))
      }
    }
   );
  }
  
  render() {
    console.log('state',this.state.images)
    const { classes } = this.props;
    return (
      <form className={classes.container} noValidate autoComplete="off">
          <TextField
            id="outlined-full-width"
            label="Search"
            style={{ margin: 8 }}
            placeholder="Search Images..."
            helperText="Images!"
            name="searchImage"
            fullWidth
            margin="normal"
            variant="outlined"
            onChange={this.handleChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
      </form>
       
    )
  }
}

export default connect()(withStyles(styles)(Search))

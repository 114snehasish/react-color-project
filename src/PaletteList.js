import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Dialog, DialogTitle } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui//core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import Avatar from '@material-ui/core/Avatar';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';
import { withStyles } from '@material-ui/styles';

import MiniPalette from './MiniPalette';
import { styles } from './Styles/PaletteListStyles';

class PaletteList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      deleteDialogOpen: false,
      deletingId: null,
    };
    this.openDialog = this.openDialog.bind(this);
    this.closeDialog = this.closeDialog.bind(this);
    this.deletePalette = this.deletePalette.bind(this);
  }

  openDialog(id) {
    this.setState({ deleteDialogOpen: true, deletingId: id });
  }

  closeDialog() {
    this.setState({ deleteDialogOpen: false, deletingId: null });
  }

  deletePalette() {
    this.props.deletePalette(this.state.deletingId);
    this.closeDialog();
  }

  goToPalette = (id) => {
    this.props.history.push(`/palette/${id}`);
  };
  render() {
    const { palettes, classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1 className={classes.heading}>Palletty</h1>
            <Link to={`/palette/new`}>Create new</Link>
          </nav>
          <TransitionGroup className={classes.palette}>
            {palettes.map((p) => (
              <CSSTransition key={p.id} classNames='fade' timeout={500}>
                <MiniPalette
                  {...p}
                  haandleClick={() => this.goToPalette(p.id)}
                  // remove={deletePalette}
                  openDialog={this.openDialog}
                  key={p.id}
                  id={p.id}
                />
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
        <Dialog
          open={this.state.deleteDialogOpen}
          aria-labelledby='delete-dialog-title'
          onClose={this.closeDialog}
        >
          <DialogTitle id='delete-dialog-title'>
            Delete this Palette?
          </DialogTitle>
          <List>
            <ListItem button onClick={this.deletePalette}>
              <ListItemAvatar>
                <Avatar
                  style={{ backgroundColor: blue[100], color: blue[500] }}
                >
                  <CheckIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText>Delete</ListItemText>
            </ListItem>
            <ListItem button onClick={this.closeDialog}>
              <ListItemAvatar>
                <Avatar style={{ backgroundColor: red[100], color: red[500] }}>
                  <CloseIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText>Cancel</ListItemText>
            </ListItem>
          </List>
        </Dialog>
      </div>
    );
  }
}
export default withStyles(styles)(PaletteList);

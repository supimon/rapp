/**
 * Created by supimon on 19/02/18.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Hidden from 'material-ui/Hidden';
import Divider from 'material-ui/Divider';
import MenuIcon from 'material-ui-icons/Menu';
import Collapse from 'material-ui/transitions/Collapse';
import SettingsIcon from 'material-ui-icons/Settings';
import OrdersIcon from 'material-ui-icons/List';
import TablesIcon from 'material-ui-icons/GridOn';
import HelpIcon from 'material-ui-icons/Help';
import ExpandLess from 'material-ui-icons/ExpandLess';
import ExpandMore from 'material-ui-icons/ExpandMore';
import StarBorder from 'material-ui-icons/StarBorder';


const drawerWidth = 240;

const styles = theme => ({
  root: {
    width: '100%',
    height: 430,
    zIndex: 1,
    overflow: 'hidden',
  },
  appFrame: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
  },
  appBar: {
    position: 'absolute',
    marginLeft: drawerWidth,
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  drawerHeader: theme.mixins.toolbar,
  drawerPaper: {
    width: 250,
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
      position: 'relative',
      height: '100%',
    },
  },
  content: {
    backgroundColor: theme.palette.background.default,
    width: '100%',
    padding: theme.spacing.unit * 3,
    height: 'calc(100% - 56px)',
    marginTop: 56,
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 64px)',
      marginTop: 64,
    },
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
});

class MainMenu extends React.Component {
  state = {
    mobileOpen: false,
    open: false,
    activeMenu: 'Orders',
  };

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };

  handleSettingsClick = () => {
    this.setState({ open: !this.state.open, activeMenu: 'Settings' });
  };

  handleSetMenuAsTitle = (text) => {
    this.setState({ activeMenu: text});
    if (this.state.mobileOpen) {
      this.setState({ mobileOpen: !this.state.mobileOpen });
    }
  }

  render() {
    const { classes, theme } = this.props;

    const bgColorActive = {backgroundColor: "#C5CAE9"},
          bgColorNormal = {backgroundColor: "#fff"};

    const drawer = (
      <div>
        <div className={classes.drawerHeader} />
        <Divider />
        <List>
          <ListItem style={this.state.activeMenu === 'Tables' ? bgColorActive: bgColorNormal}
                    button onClick={this.handleSetMenuAsTitle.bind(this, 'Tables')}>
            <ListItemIcon>
              <TablesIcon />
            </ListItemIcon>
            <ListItemText inset primary="Tables" />
          </ListItem>
          <ListItem style={this.state.activeMenu === 'Orders' ? bgColorActive: bgColorNormal}
                    button onClick={this.handleSetMenuAsTitle.bind(this, 'Orders')}>
            <ListItemIcon>
              <OrdersIcon />
            </ListItemIcon>
            <ListItemText inset primary="Orders" />
          </ListItem>
          <ListItem style={this.state.activeMenu === 'Settings' ? bgColorActive: bgColorNormal}
                    button onClick={this.handleSettingsClick}>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText inset primary="Settings" />
            {this.state.open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={this.state.open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}
                        style={this.state.activeMenu === 'My Account' ? bgColorActive: bgColorNormal}
                        onClick={this.handleSetMenuAsTitle.bind(this, 'My Account')}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText inset primary="My Account" />
              </ListItem>
            </List>
          </Collapse>
          <ListItem style={this.state.activeMenu === 'Help' ? bgColorActive: bgColorNormal}
                    button onClick={this.handleSetMenuAsTitle.bind(this, 'Help')}>
            <ListItemIcon>
              <HelpIcon />
            </ListItemIcon>
            <ListItemText inset primary="Help" />
          </ListItem>
        </List>
      </div>
    );

    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={this.handleDrawerToggle}
                className={classes.navIconHide}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="title" color="inherit" noWrap>
                {this.state.activeMenu}
              </Typography>
            </Toolbar>
          </AppBar>
          <Hidden mdUp>
            <Drawer
              variant="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={this.state.mobileOpen}
              classes={{
                paper: classes.drawerPaper,
              }}
              onClose={this.handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden smDown implementation="css">
            <Drawer
              variant="permanent"
              open
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <main className={classes.content}>
            <Typography noWrap>{'You think water moves fast? You should see ice.'}</Typography>
          </main>
        </div>
      </div>
    );
  }
}

MainMenu.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MainMenu);


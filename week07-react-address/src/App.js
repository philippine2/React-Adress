import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import Button from '@material-ui/core/Button';


const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 5,
        textAlign: 'center',
        color: theme.palette.text.secondary.light,
        backgroundColor: theme.palette.primary.dark
    },
    typography: {
        color: theme.palette.secondary.light
    },
    button: {
        margin: theme.spacing.unit,
    }
});

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            address: [
                {firstName: 'unknown', lastName: 'unknown', state: 'unknown'},
                {firstName: 'unknown', lastName: 'unknown', state: 'unknown'},
                {firstName: 'unknown', lastName: 'unknown', state: 'unknown'},
                {firstName: 'unknown', lastName: 'unknown', state: 'unknown'},



            ]
        };
    }

    getFile = () => {
        console.log('getFile called.');
        this.setState({
            address: [
                {firstName: 'Patty', lastName: 'Murray', state: 'Washington'},
                {firstName: 'George', lastName: 'Washignton', state: 'Virginia'},
                {firstName: 'Philippine', lastName: 'Tembo', state: 'Charlotte'},
                {firstName: 'Marcel', lastName: 'Zinga', state: 'North Carolina'}
            ]
        });
    };

    nextIndex = () => {
        console.log('next index called.');
        let newIndex = this.state.index + 1;


        if (newIndex > 3) {
            newIndex = 0;
        }



        this.setState({index: newIndex});
    };

    render() {
        const {classes} = this.props;
        return (
            <div>
                <Paper className={classes.paper}>
                    <Typography className={classes.typography} variant="h5" gutterBottom>
                        Welcome to Elf Address
                    </Typography>
                </Paper>

                <Paper className={classes.paper}>
                    <Typography className={classes.typography} variant="body1" gutterBottom>
                        FullName: {this.state.address[this.state.index].firstName}
                        {this.state.address[this.state.index].lastName}
                        {this.state.address[this.state.index].state}



                    </Typography>
                </Paper>
                <Paper className={classes.paper}>
                    <Button
                        id="getFileAction"
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        onClick={this.getFile}>
                        Get File
                    </Button>

                    <Button
                        id="getFileAction"
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        onClick={this.nextIndex}>
                        Next
                    </Button>
                </Paper>
            </div>
        );
    }
}

App.propTypes = {
    classes: PropTypes.object.isRequired
};
//export default App;
export default withStyles(styles)(App);
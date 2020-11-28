import React from 'react';
import HomeButtonGroup from '../components/HomeButtonGroup'
import { Paper } from '@material-ui/core';

const styles = {
    paperContainer: {
        backgroundImage:  `url(${"/babaswamp.jpg"})`,
        backgroundPosition: "center",
        height: "100vh",
        backgroundSize: 'cover'
    }
};

export default class Index extends React.Component{
    render(){
        return(
            <Paper style={styles.paperContainer}>
                <HomeButtonGroup />
            </Paper>
        )
    }
}
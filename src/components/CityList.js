import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardTitle, CardContent, CardImage } from './cards';

import {favorite, position} from '../actions/ListAction'

// const citiesData = [];
// Object.keys(cities).forEach((key) => {
//     alert(cities[key])
//     citiesData.push(cities[key]);
// });



class CityList extends Component {
 
    constructor(props) {
        super(props);
        this.state = {
            latitude: null,
            longitude: null,
            error: null,
            position:null,
        };
    }
    
    componentDidMount(){
        navigator.geolocation.getCurrentPosition(
        (position) => {
            this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            position:position,
            error: null,
            });
            this.props.position(position.coords.latitude);
        },
        (error) => this.setState({ error: error.message }),
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
        );
    }

    handleOnPress = (item) => {
        var data = this.props.citiesData;
        if(data[item].Favorite){
            data[item].Favorite = false;
        }else{
            data[item].Favorite = true;
        }
        var ob=[]; 
        this.props.favorite( Object.assign(ob,data));
    }


    renderItem = ({ item,index }) => (
        
        <Card key={item.Name}>
            <CardImage 
            source={{uri: item.Image}} 
            title={item.Name}
            weather={item.Temperature}
            favorite = {item.Favorite}
            distance={item.Distance}
            favorite = {item.Favorite}
            id ={index}
            onPress = {this.handleOnPress}
            />
            <CardContent isDark={false} text={item.Description} />
        </Card>

    );
    
    render() {
        return (
            <FlatList
                styles={styles.container}
                data={this.props.citiesData}
                renderItem={this.renderItem}
            />              
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  }
});

const mapStateToProps = state => {
    return { 
        citiesData: state.cities,
        position: state.position
    };
};

const mapDispatchToProps = {
    favorite,
    position
};

export default connect(mapStateToProps, mapDispatchToProps)(CityList);
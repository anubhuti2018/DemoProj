import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, AsyncStorage} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import geolib from 'geolib';


export default class CardImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      calc_height: 0,
    };
  }
 
  
  
  render() {
    console.log(this.props.distance);
    const newStyle = this.props.style || {};
  //   const position = geolib.getDistance(
  //     {latitude: this.props.distance.coords.latitude, longitude: this.props.distance.coords.longitude},
  //     {latitude: 51.5103, longitude: 7.49347}
  // );
    return (
      <View style={[styles.cardImage, newStyle]} onLayout={(e) => { this.setState({ calc_height: e.nativeEvent.layout.width * 9 / 16 }); }}>
        {
          this.props.source &&
          <ImageBackground source={this.props.source} resizeMode={this.props.resizeMode || 'cover'} resizeMethod={this.props.resizeMethod || 'resize'} style={[styles.imageContainer, { height: this.state.calc_height }]}>
           {this.props.favorite == true &&
           <TouchableOpacity style={{alignSelf:'flex-end'}} onPress={(value) =>this.props.onPress(this.props.id)}>
              <Icon name="favorite" size={30} color="white" />
           </TouchableOpacity>
           }
          {this.props.favorite == false &&
            <TouchableOpacity style={{alignSelf:'flex-end'}} onPress={(value) =>this.props.onPress(this.props.id)}>
              <Icon name="favorite-border" size={30} color="white" />
            </TouchableOpacity>
            } 
          
           <View style={styles.fdRow}>
              <Text style={styles.imageTitleText}>{this.props.title}</Text>
              <View style={[styles.fdColumn,styles.imageSubTitleView]}>
                <Text style={styles.imageSubTitleText}>{this.props.weather}</Text>
                <View style={styles.fdRow}>
                  <Text style={styles.imageSubTitleText}>{this.props.distance} Km</Text>
                  <Icon name="chevron-right" size={30} color="white" />
                </View>
              </View>
            </View>
            

          </ImageBackground>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cardImage: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'grey',
    alignSelf: 'stretch',
    marginBottom: 16,
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
  imageContainer: {
    flex: 1,
    flexDirection: 'column',
    paddingRight: 10,
    paddingLeft: 10,
    paddingBottom: 10,
    paddingTop: 10,
    justifyContent:'space-between',
  },
  imageTitleText: {
    fontSize: 24,
    color: 'white',
    alignSelf:'flex-start',
    justifyContent:'space-between',
  },
  imageSubTitleText: {
    fontSize: 15,
    color: 'white',
    alignItems:'flex-end'
  },
  imageSubTitleView:{
    flex:1,
    flexDirection:'column',
    alignItems:'flex-end',
  },
  fdRow:{
    flexDirection:'row'
  },
  fdColumn:{
    flexDirection : 'column'
  }
});

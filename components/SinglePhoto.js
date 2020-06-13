import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import PropTypes from 'prop-types'

const { width, height } = Dimensions.get('window')

export class SinglePhoto extends Component {
  state = {
    heartPress: false
  }

  pressHeart = () => {
    this.setState({ heartPress: true })
  }

  render() {
    const photoItem = this.props.navigation.getParam('photoItem')
    const faves = this.props.screenProps.fav
    let heartStyle = styles.heartNotPressed
    faves.map((item) => {
      if (item === photoItem.id) {
        heartStyle = heartStyle = styles.heartPressed
      }
    })
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={{ uri: photoItem.webformatURL }}></Image>
        <Icon
          name="star"
          style={heartStyle}
          onPress={this.props.screenProps.faveFunc.bind(this, photoItem.id)}
        />
        <Text>Likes: {photoItem.likes}</Text>
      </View>
    )
  }
}

SinglePhoto.PropTypes = {
  pressHeart: PropTypes.func
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    height: height * 0.3,
    width: width * 0.6
  },
  heartPressed: {
    marginTop: 25,
    fontSize: 50,
    color: '#00664b'
  },
  heartNotPressed: {
    marginTop: 25,
    fontSize: 50,
    color: '#b3ffeb'
  }
})

export default SinglePhoto

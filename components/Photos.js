import React, { Component } from 'react'
import { StyleSheet, View, ActivityIndicator } from 'react-native'
import ListListView from './ListListView'
import GridView from './GridView'
import PropTypes from 'prop-types'

export class Photos extends Component {
  state = {
    loading: true,
    favData: []
  }

  pressPicture = (item) => {
    this.props.navigation.navigate('SinglePhoto', { photoItem: item })
  }

  renderList = () => {
    return (
      <View>
        <ListListView
          data={this.props.screenProps.data}
          navigation={this.props.navigation}
        ></ListListView>
      </View>
    )
  }

  renderGrid() {
    return (
      <View>
        <GridView data={this.props.screenProps.data} navigation={this.props.navigation}></GridView>
      </View>
    )
  }

  renderFaves() {
    return (
      <View>
        <GridView
          data={this.props.screenProps.favData}
          navigation={this.props.navigation}
        ></GridView>
      </View>
    )
  }

  renderSpinner() {
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    )
  }

  render() {
    if (this.props.screenProps.isFaves) return this.renderFaves()
    return this.props.screenProps.isList ? this.renderList() : this.renderGrid()
  }
}

Photos.PropTypes = {
  pressPicture: PropTypes.func,
  renderList: PropTypes.func
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: '#F5FCFF'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  }
})

export default Photos

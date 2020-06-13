import React, { Component } from 'react'
import { SafeAreaView, StyleSheet, Text, View, ActivityIndicator, Image } from 'react-native'
import Header from './components/Header'
import Axios from 'axios'
import Navigator from './routes/ListStack'
import PropTypes from 'prop-types'

export default class App extends Component {
  state = {
    title: 'Image Browser',
    data: [],
    favData: [],
    isList: true,
    isFaves: false,
    loading: true,
    favorites: [1],
    search: 'Search Here'
  }

  componentDidMount() {
    const search = this.state.search.replace(' ', '+')
    Axios.get(
      `https://pixabay.com/api/?key=16000886-bf8ad4d63f21f5ee4af1bd743&q=${search}&image_type=photo&pretty=true`
    )
      .then((res) => {
        this.setState({ data: res.data.hits, loading: false })
      })
      .catch((res) => this.setState({ data: 'Error fetching photos' }))
  }

  pressGrid = () => {
    this.setState({ isList: false, isFaves: false })
  }

  pressStar = () => {
    let newData = []
    const promises = []
    this.state.favorites.map((fav) => {
      promises.push(
        Axios.get(
          `https://pixabay.com/api/?key=16000886-bf8ad4d63f21f5ee4af1bd743&id=${fav}&image_type=photo`
        ).then((res) => {
          newData = [...newData, res.data.hits[0]]
        })
      )
    })
    Promise.all(promises).then(() => {
      this.setState({ isList: false, isFaves: true, favData: newData })
    })
  }

  pressList = () => {
    this.setState({ isList: true, isFaves: false })
  }

  updateSearch = (search) => {
    this.setState({ search })
    const newSearch = this.state.search.replace(' ', '+')
    Axios.get(
      `https://pixabay.com/api/?key=16000886-bf8ad4d63f21f5ee4af1bd743&q=${newSearch}&image_type=photo&pretty=true`
    )
      .then((res) => {
        this.setState({ data: res.data.hits, loading: false })
      })
      .catch((res) => this.setState({ data: 'Error fetching photos' }))
  }

  addToFaves = (id) => {
    let faves = this.state.favorites
    let addItem = true
    this.state.favorites.map((fav) => {
      if (fav === id) {
        addItem = false
      }
    })
    faves = faves.filter((fav) => fav != id)
    if (addItem) faves.push(id)

    this.setState({ favorites: faves })
  }

  renderLoaded = () => {
    if (this.state.data.length > 0)
      return (
        <SafeAreaView style={styles.container}>
          <Image
            source={{ uri: 'https://i.ya-webdesign.com/images/custom-text-png-1.png' }}
            style={styles.Title}
          >
          </Image>
          <Navigator
            screenProps={{
              favData: this.state.favData,
              data: this.state.data,
              view: this.state.view,
              isList: this.state.isList,
              isFaves: this.state.isFaves,
              fav: this.state.favorites,
              faveFunc: this.addToFaves
            }}
          />
          <Header
            title={this.state.title}
            pressGrid={this.pressGrid}
            pressList={this.pressList}
            pressStar={this.pressStar}
            isList={this.state.isList}
            updateSearch={this.updateSearch}
            search={this.state.search}
          />
        </SafeAreaView>
      )
    return (
      <SafeAreaView style={styles.container}>
        <Image
          source={{ uri: 'https://i.ya-webdesign.com/images/custom-text-png-1.png' }}
          style={styles.Title} >
        </Image>
        <Text style={styles.noRes}>No search results</Text>
        <Navigator
          screenProps={{
            favData: this.state.favData,
            data: this.state.data,
            view: this.state.view,
            isList: this.state.isList,
            isFaves: this.state.isFaves,
            fav: this.state.favorites,
            faveFunc: this.addToFaves
          }}
        />
        <Header
          title={this.state.title}
          pressGrid={this.pressGrid}
          pressList={this.pressList}
          pressStar={this.pressStar}
          isList={this.state.isList}
          updateSearch={this.updateSearch}
          search={this.state.search}
        />
      </SafeAreaView>
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
    return this.state.loading ? this.renderSpinner() : this.renderLoaded()
  }
}

App.PropTypes = {
  pressGrid: PropTypes.func,
  pressList: PropTypes.func,
  pressStar: PropTypes.func
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
  },
  Title: {
    height: 30,
    resizeMode: 'center'
  },
  noRes: {
    fontSize: 15,
    color: '#000',
    textAlign: 'center'
  }
})

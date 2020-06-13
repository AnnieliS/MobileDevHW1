import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, SearchBar } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import PropTypes from 'prop-types'

export class Header extends Component {
  render() {
    const { search } = this.props
    return (
      <View style={style.header}>
        <SearchBar
          placeholder="Type Here..."
          onChangeText={this.props.updateSearch}
          value={search}
          lightTheme
          inputContainerStyle={style.input}
        />
        <View style={style.buttons}>
          <Button
            onPress={this.props.pressGrid}
            type="clear"
            icon={<Icon name="th" size={30} color="#00664b" />}
          />

          <Button
            onPress={this.props.pressList}
            type="clear"
            icon={<Icon name="th-list" size={30} color="#00664b" />}
          />

          <Button
            onPress={this.props.pressStar}
            type="clear"
            icon={<Icon name="star" size={30} color="#00664b" />}
          />
        </View>
      </View>
    )
  }
}

Header.propTypes = {
  search: PropTypes.Array,
  updateSearch: PropTypes.any,
  pressGrid: PropTypes.func,
  pressList: PropTypes.func,
  pressStar: PropTypes.func
}

const style = StyleSheet.create({
  header: {
    padding: 5,
    height: 140
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  input: {
    height: 40,
    padding: 8,
    backgroundColor: '#fff',
    borderRadius: 17
  }
})

export default Header

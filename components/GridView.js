import React, { Component } from 'react'
import { View, FlatList, Image, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import PropTypes from 'prop-types'

export class GridView extends Component {
  render() {
    return (
      <View>
        <FlatList
          data={this.props.data}
          renderItem={({ item }) => (
            <View style={{ flex: 1, flexDirection: 'column', margin: 1 }}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('SinglePhoto', { photoItem: item })}
              >
                <Image style={styles.imageThumbnail} source={{ uri: item.webformatURL }} />
              </TouchableOpacity>
            </View>
          )}
          //Setting the number of column
          numColumns={3}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    )
  }
}
GridView.propTypes = {
  data: PropTypes.Array,
  navigation: PropTypes.any
}

const styles = StyleSheet.create({
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100
  }
})

export default GridView

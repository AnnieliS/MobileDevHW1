import React, { Component } from 'react'
import { View, FlatList } from 'react-native'
import { ListItem } from 'react-native-elements'
import PropTypes from 'prop-types'

export class ListListView extends Component {
  render() {
    return (
      <View>
        <FlatList
          data={this.props.data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <ListItem
              title={` ${item.tags}`}
              subtitle={`Likes: ${item.likes}    Views: ${item.views}`}
              leftAvatar={{ source: { uri: item.previewURL } }}
              onPress={() => this.props.navigation.navigate('SinglePhoto', { photoItem: item })}
            />
          )}
        />
      </View>
    )
  }
}

ListListView.propTypes = {
  data: PropTypes.Array,
  navigation: PropTypes.any
}

export default ListListView

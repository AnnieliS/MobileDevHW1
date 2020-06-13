import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'

import Photos from '../components/Photos'
import SinglePhoto from '../components/SinglePhoto'

const screens = {
  Photos: {
    screen: Photos
  },
  SinglePhoto: {
    screen: SinglePhoto
  }
}

const ListStack = createStackNavigator(screens)

export default createAppContainer(ListStack)

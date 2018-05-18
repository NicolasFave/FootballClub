import { StackNavigator } from 'react-navigation'
import CompetitionsScreen from '../Containers/CompetitionsScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  CompetitionsScreen: { screen: CompetitionsScreen }
}, {
    headerMode: 'none',
    initialRouteName: 'CompetitionsScreen',
    navigationOptions: {
      headerStyle: styles.header
    }
  })

export default PrimaryNav

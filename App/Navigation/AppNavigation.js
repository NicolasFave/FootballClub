import { StackNavigator } from 'react-navigation'
import CompetitionsScreen from '../Containers/CompetitionsScreen'
import CompetitionDetailsScreen from '../Containers/CompetitionDetailsScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  CompetitionsScreen: { screen: CompetitionsScreen },
  CompetitionDetailsScreen: { screen: CompetitionDetailsScreen },
}, {
    headerMode: 'none',
    initialRouteName: 'CompetitionsScreen',
    navigationOptions: {
      headerStyle: styles.header
    }
  })

export default PrimaryNav

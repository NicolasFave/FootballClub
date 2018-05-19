import { StackNavigator } from 'react-navigation'
import CompetitionsScreen from '../Containers/CompetitionsScreen'
import CompetitionDetailsScreen from '../Containers/CompetitionDetailsScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  CompetitionsScreen: {
    screen: CompetitionsScreen,
    navigationOptions: {
      headerTitle: 'Compétitions',
    }
  },
  CompetitionDetailsScreen: { screen: CompetitionDetailsScreen },
}, {
    headerMode: 'screen',
    initialRouteName: 'CompetitionsScreen',
    navigationOptions: {
      headerStyle: styles.header,
      headerBackTitle: null,
    }
  })

export default PrimaryNav

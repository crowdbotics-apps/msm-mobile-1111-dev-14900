import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen014299Navigator from '../features/BlankScreen014299/navigator';
import BlankScreen114298Navigator from '../features/BlankScreen114298/navigator';
import BlankScreen014281Navigator from '../features/BlankScreen014281/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen014299: { screen: BlankScreen014299Navigator },
BlankScreen114298: { screen: BlankScreen114298Navigator },
BlankScreen014281: { screen: BlankScreen014281Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen4270154Navigator from '../features/BlankScreen4270154/navigator';
import BlankScreen4170153Navigator from '../features/BlankScreen4170153/navigator';
import BlankScreen4070152Navigator from '../features/BlankScreen4070152/navigator';
import Maps70118Navigator from '../features/Maps70118/navigator';
import Maps70113Navigator from '../features/Maps70113/navigator';
import UserProfile70109Navigator from '../features/UserProfile70109/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
BlankScreen4270154: { screen: BlankScreen4270154Navigator },
BlankScreen4170153: { screen: BlankScreen4170153Navigator },
BlankScreen4070152: { screen: BlankScreen4070152Navigator },
Maps70118: { screen: Maps70118Navigator },
Maps70113: { screen: Maps70113Navigator },
UserProfile70109: { screen: UserProfile70109Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;

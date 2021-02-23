import { createStackNavigator, createAppContainer, createSwitchNavigator } from "react-navigation";
import { fromRight } from "react-navigation-transitions";
import Map from "../screens/map";
import CaseList from "../screens/caseList";
import CaseView from "../screens/caseView";
import LoginScreen from "../screens/login";
//import tester from "../screens/testingView"

const AppStack = createStackNavigator({
  List: CaseList,
  Case: CaseView,
  Map: Map
},
{
  transitionConfig: () => fromRight(300)
});
const AuthStack = createStackNavigator({
  Login: LoginScreen
},
{
  transitionConfig: () => fromRight(300)
}
);

const AppContainer = createAppContainer(
  createSwitchNavigator(
    {
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: "Auth",
    },
    {
      defaultNavigationOptions: {
        headerBackTitle: null
      }
    }
  )
);

export default AppContainer;

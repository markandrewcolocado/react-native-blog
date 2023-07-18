const { createAppContainer } = require("react-navigation");
const { createStackNavigator } = require("react-navigation-stack");

import IndexScreen from "./src/screens/IndexScreen";

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
  },
  {
    initialRouteName: "Index",
    defaultNavigationOptions: {
      title: "My Blog",
    },
  }
);

export default createAppContainer(navigator);

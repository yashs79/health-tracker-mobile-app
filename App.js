const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import Water from "./screens/Water";
import UserLogin1 from "./screens/UserLogin1";
import Dashboaard from "./screens/Dashboaard";
import DietPlan from "./screens/DietPlan";
import UserLogin from "./screens/UserLogin";
import Breakfast from "./screens/Breakfast";
import HealthTrends from "./screens/HealthTrends";
import VariantStandardColorPrimar from "./components/VariantStandardColorPrimar";
import SizemediumTypeprimaryOut from "./components/SizemediumTypeprimaryOut";
import HierarchyprimaryListfalse from "./components/HierarchyprimaryListfalse";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Water"
              component={Water}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UserLogin1"
              component={UserLogin1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Dashboaard"
              component={Dashboaard}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DietPlan"
              component={DietPlan}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UserLogin"
              component={UserLogin}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Breakfast"
              component={Breakfast}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HealthTrends"
              component={HealthTrends}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;

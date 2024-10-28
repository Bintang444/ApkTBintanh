import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {Home, Mac, YT, IG, FB, TIKTOK} from '../pages/index';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Mac" component={Mac} />
        <Stack.Screen name="YT" component={YT} />
        <Stack.Screen name="IG" component={IG} />
        <Stack.Screen name="FB" component={FB} />
        <Stack.Screen name="TIKTOK" component={TIKTOK} />
      </Stack.Navigator>
  );
};

export default Router
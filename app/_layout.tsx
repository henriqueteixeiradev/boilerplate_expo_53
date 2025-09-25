import { useEffect, useState } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { Tabs } from "expo-router";
import { Provider as ReduxProvider } from "react-redux";
import { StatusBar } from "expo-status-bar";
import { TabBar } from "../src/components/TabBar";
import { Modals } from "../src/views/Modals";
import { AuthProvider } from "../src/contexts/AuthContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { store } from "../src/store";
import NetInfo from "@react-native-community/netinfo";

import {
  useFonts,
  Nunito_400Regular,
  Nunito_600SemiBold,
  Nunito_700Bold,
  Nunito_900Black,
} from "@expo-google-fonts/nunito";

export default function Layout() {
  const [isReady, setReady] = useState(false);
  const [isConnected, setConnected] = useState<boolean | null>(true);

  const queryClient = new QueryClient();

  const [hasLoadedFonts] = useFonts({
    Nunito_400Regular,
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_900Black,
  });


  useEffect(() => {
    if (hasLoadedFonts) {
      (async () => {
        setTimeout(() => {
          setReady(true);
        }, 1000);
      })();
    }
  }, [hasLoadedFonts]);

  if (!isReady) {
    return (
      <View className="flex-1 bg-brand_white justify-center items-center">
        <ActivityIndicator size={80} color={"#0A0E39"} />
      </View>
    );
  }

  NetInfo.fetch().then((state) => {
    if (state.isConnected) setConnected(true);
    else setConnected(false);
  });

  if (!isConnected) {
    return (
      <View className="flex-1 bg-brand_white justify-center items-center">
        <Text className="text-center text-brand_gray-900 font-bold text-lg">
          Ooops, parece que você está sem internet!
        </Text>
      </View>
    );
  }

  return (
    <ReduxProvider store={store}>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <View className="flex-1 bg-brand_white">
            <StatusBar style="auto" />

            <Modals />

            <Tabs
              screenOptions={{
                headerShown: false,
                tabBarHideOnKeyboard: true,
              }}
              tabBar={() => {
                return <TabBar />;
              }}
            >
              {/* Tabs.Screen components */}
            </Tabs>
          </View>
        </AuthProvider>
      </QueryClientProvider>
    </ReduxProvider>
  );
}

import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{ title: "Главная" }}
      />
      <Tabs.Screen
        name="explore"
        options={{ title: "Данные" }}
      />
      <Tabs.Screen
        name="settings"
        options={{ title: "Настройки" }}
      />
    </Tabs>
  );
}

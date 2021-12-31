import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider, Text, Box } from "native-base";
import { Platform } from "react-native";
import Card from "./components/Card";
export default function App() {
  const [countryInfo, setCountryInfo] = useState({});

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
      .then((response) => response.json())
      .then((data) => {
        setCountryInfo(data);
      });
  }, []);
  return (
    <NativeBaseProvider>
      <Box
        style={{
          flexDirection: Platform.OS == "web" ? "row" : "column",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Card
          title="Coronavirus Cases"
          label="yellow.500"
          todayCases={countryInfo.todayCases}
        />
        <Card
          title="Recoverd"
          label="green.500"
          todayCases={countryInfo.todayCases}
        />
        <Card
          title="Deaths"
          label="red.500"
          todayCases={countryInfo.todayCases}
        />
        <StatusBar style="auto" />
      </Box>
    </NativeBaseProvider>
  );
}

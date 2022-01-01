import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  NativeBaseProvider,
  Spinner,
  Center,
  Box,
  Text,
  HStack,
} from "native-base";
import { Cards, SelectCountry, Chart } from "./components/";
import { fetchData } from "./api";
export default function App() {
  const [data, setData] = useState([]);
  const [country, setCountry] = useState("");

  const handleCountryChange = async (country) => {
    const d = await fetchData(country);
    setCountry(country);
    setData(d);
  };

  useEffect(() => {
    const fetchAPI = async () => {
      const initialData = await fetchData();
      setData(initialData);
    };
    fetchAPI();
  }, []);

  return (
    <NativeBaseProvider>
      {data.length === 0 ? (
        <Center flex={1} margin="auto" flexDirection="column">
          <Spinner size="lg" />
        </Center>
      ) : (
        <Box>
          <HStack w="100%" mt="2">
            <Text mx="3" px="4" my="1" fontSize="22" bold>
              {country ? country : "Global"}
            </Text>
            <SelectCountry handleCountryChange={handleCountryChange} />
          </HStack>
          <Cards
            title="Confirmed Cases"
            confirmed={data.confirmed.value}
            recovered={data.recovered.value}
            deaths={data.deaths.value}
            lastUpdate={new Date(data.lastUpdate).toDateString()}
          />
          <Chart data={data} country={country} />
          <StatusBar style="auto" />
        </Box>
      )}
    </NativeBaseProvider>
  );
}

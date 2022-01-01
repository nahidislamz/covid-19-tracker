import { useState, useEffect } from "react";
import { Box, Select, CheckIcon } from "native-base";
import { fetchCountries } from "../api";

export default function SelectCountry({ handleCountryChange }) {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("");

  const handleCountry = (itemValue) => {
    handleCountryChange(itemValue);
    setCountry(itemValue);
  };

  useEffect(() => {
    const fetchAPI = async () => {
      setCountries(await fetchCountries());
    };

    fetchAPI();
  }, []);

  return (
    <Box mx="2 ">
      <Select
        selectedValue={country}
        minWidth="200"
        accessibilityLabel="Select Country"
        placeholder="Select Country"
        _selectedItem={{
          bg: "teal.600",
          endIcon: <CheckIcon size="5" />,
        }}
        mt={1}
        onValueChange={(itemValue) => handleCountry(itemValue)}
      >
        {countries.map((country, i) => (
          <Select.Item px="4" key={i} label={country} value={country} />
        ))}
      </Select>
    </Box>
  );
}

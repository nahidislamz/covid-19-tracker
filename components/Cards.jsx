import React from "react";
import { Box } from "native-base";
import { Platform } from "react-native";
import Card from "./Card/Card";

const Cards = (props) => {
  return (
    <Box
      style={{
        flexDirection: Platform.OS == "web" ? "row" : "column",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Card
        title="Confirmed Cases"
        case={props.confirmed}
        border="blue.600"
        lastUpdate={props.lastUpdate}
      />
      <Card
        title="Recovered"
        case={props.recovered}
        border="green.600"
        lastUpdate={props.lastUpdate}
      />
      <Card
        title="Deaths"
        case={props.deaths}
        border="red.500"
        lastUpdate={props.lastUpdate}
      />
    </Box>
  );
};

export default Cards;

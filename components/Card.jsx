import React from "react";
import { Box, Text } from "native-base";
import { Platform } from "react-native";

const Card = (props) => {
  var width = "";
  Platform.OS == "web" ? (width = "30%") : (width = "100%");
  return (
    <Box bg="gray.50" rounded="md" shadow="md" m="4" w={width}>
      <Text p="4" color="gray.900" bold>
        {props.title}
      </Text>
      <Text p="4" color="gray.900" bold>
        {props.todayCases}
      </Text>
      <Box rounded="md" height="2" bg={props.label}></Box>
    </Box>
  );
};

export default Card;

import React from "react";
import { Box, Text } from "native-base";
import { Platform } from "react-native";
import CountUp from "react-countup";
const Card = (props) => {
  var width = "";
  Platform.OS == "web" ? (width = "30%") : (width = "100%");
  return (
    <Box bg="gray.50" rounded="md" shadow="md" m="4" w={width}>
      <Text px="4" py="2" color="gray.900">
        {props.title}
      </Text>
      <Text px="4" color="gray.900" bold fontSize="20">
        <CountUp start={0} end={props.case} duration={2.75} separator="," />
      </Text>
      <Text px="4" py="2" color="gray.600">
        {props.lastUpdate}
      </Text>
      <Box rounded="md" height="2" bg={props.border}></Box>
    </Box>
  );
};

export default Card;

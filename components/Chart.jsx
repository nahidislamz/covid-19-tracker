import React, { useState, useEffect } from "react";
import { Dimensions, Platform } from "react-native";
import {
  StackedAreaChart,
  StackedBarChart,
  BarChart,
  Grid,
} from "react-native-svg-charts";
import * as shape from "d3-shape";
import { Box } from "native-base";
import { fetchDailyData } from "../api";

const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const initialDailyData = await fetchDailyData();
      setDailyData(initialDailyData);
    };
    fetchAPI();
  }, []);

  console.log(confirmed);

  //const width = Dimensions.get("window").width;
  var mData = [];
  dailyData.map((data) => {
    mData.push({
      date: new Date(data.date).toLocaleDateString(),
      confirmed: data.confirmed,
      recovered: data.recovered,
      deaths: data.deaths,
    });
  });
  const colors = ["#4191B9", "#00c18a", "#ed5b38"];
  const keys = ["confirmed", "recovered", "deaths"];
  const svgs = [
    { onPress: () => console.log("confirmed") },
    { onPress: () => console.log("recovered") },
    { onPress: () => console.log("deaths") },
  ];
  const fill = "rgb(134, 65, 244)";

  const lineChart = dailyData[0] ? (
    <>
      <StackedAreaChart
        style={{ height: Platform.OS == "web" ? 400 : 200 }}
        data={mData}
        keys={keys}
        colors={colors}
        curve={shape.curveNatural}
        showGrid={false}
        svgs={svgs}
      ></StackedAreaChart>
    </>
  ) : null;
  const barChart = confirmed ? (
    <BarChart
      style={{ height: Platform.OS == "web" ? 400 : 200 }}
      data={[confirmed.value, recovered.value, deaths.value]}
      svg={{ fill }}
      contentInset={{ top: 30, bottom: 30 }}
    >
      <Grid />
    </BarChart>
  ) : null;
  return <Box mx="4">{country ? barChart : lineChart}</Box>;
};

export default Chart;

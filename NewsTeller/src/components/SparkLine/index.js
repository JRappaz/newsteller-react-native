import React, { useEffect, memo } from "react";
import { View, Dimensions } from "react-native";
import { styles } from "./style";

import { LineChart } from "react-native-chart-kit";

/**
 *  Display SparkLine
 */
export default memo(function SparkLine({ values = [] }) {
  const data =
    values.length == 0 ? [0] : values.map((v) => v.count).slice(0, 168);

  const width = Dimensions.get("window").width * 0.85;
  return (
    <View>
      <LineChart
        data={{
          datasets: [
            {
              data: data,
              color: (opacity = 1) => `rgba(11, 11, 11, ${opacity})`,
              strokeWidth: 1,
            },
          ],
        }}
        width={width}
        height={100}
        yAxisLabel=""
        yAxisSuffix=""
        yAxisInterval={1}
        chartConfig={{
          backgroundColor: "#ffffff",
          backgroundGradientFrom: "#ffffff",
          backgroundGradientTo: "#ffffff",
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 0) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: "0",
            strokeWidth: "1",
            stroke: "#000000",
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
});

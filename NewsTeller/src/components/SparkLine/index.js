import React, { useEffect, memo } from "react";
import { View, Dimensions } from "react-native";
import { styles } from "./style";

import { Colors } from "@styles";

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
              color: (opacity = 1) => Colors.sparkline,
              strokeWidth: 1,
            },
          ],
        }}
        width={width}
        height={100}
        yAxisLabel=""
        yAxisSuffix=""
        yAxisInterval={1}
        withDots={false}
        withShadow={false}
        withInnerLines={false}
        chartConfig={{
          backgroundColor: Colors.background,
          backgroundGradientFrom: Colors.background,
          backgroundGradientTo: Colors.background,
          decimalPlaces: 0,
          color: (opacity = 1) => Colors.background,
          labelColor: (opacity = 1) => Colors.background,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: "0",
            strokeWidth: "1",
            stroke: Colors.background,
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

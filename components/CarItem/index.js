import React from "react";
import { View, Text, ImageBackground } from "react-native";
import StyledButton from "../StyledButton";
import styles from "./style";

const CarItem = () => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require("../../assets/images/ModelS.jpeg")}
        style={styles.image}
      />
      <View style={styles.titles}>
        <Text style={styles.title}>Model S</Text>
        <Text style={styles.subtitle}>Starting at $500,00</Text>
      </View>

      <StyledButton
        type="primary"
        text="custom order"
        onPress={() => {
          alert("Custom order butoon");
        }}
      />
      <StyledButton
        type="secondary"
        text="existing inventory"
        onPress={() => {
          alert("Buy now button");
        }}
      />
    </View>
  );
};

export default CarItem;

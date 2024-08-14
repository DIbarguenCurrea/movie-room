import { StyleSheet, Text, View } from "react-native";

export function Main() {
  return (
    <View>
      <Text style={styles.tittle}>Movie Room</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tittle: {
    flex: 1,
    color: "white",
    fontSize: 30,
    paddingTop: 40,
    fontWeight: "bold",
    textAlign: "left",
    margin: 0,
  },
});

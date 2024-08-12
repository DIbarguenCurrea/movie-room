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
    fontSize: 40,
    fontWeight: "bold",
    paddingTop: 50,
    textAlign: "left",
    margin: 0,
    alignItems: "flex-start",
    justifyContent: "center",
  },
});

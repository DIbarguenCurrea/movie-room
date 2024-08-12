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
    color: "white",
    fontSize: 40,
  },
});

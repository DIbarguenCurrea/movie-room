import { StyleSheet, View } from "react-native";
import Home from "../../pages/Home";

export function Main() {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
  },
});

import Constants from 'expo-constants';
import { StyleSheet, Text, View } from "react-native";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Ethan Carter</Text>
      <Text style={styles.subtext}>@ethan_carter</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Constants.statusBarHeight,
  },
  text: {
    color: "#fff",
    fontSize: 24,
  },
  subtext: {
    color: "#A1A3B5",
    fontSize: 14,
  },
});

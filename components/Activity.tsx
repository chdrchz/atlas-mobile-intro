import { Text, View, StyleSheet } from "react-native";

type ActivityProps = {
  steps?: number;
  date?: string | number | Date;
};

export default function Activity({
  steps = 0,
  date = new Date(),
}: ActivityProps) {
  const formattedDate = date ? new Date(date).toLocaleDateString() : "Unknown date";
  const formattedTime = date ? new Date(date).toLocaleTimeString() : "Unknown time";

  return (
    <View style={styles.container}>
      <View style={styles.dateTimeContainer}>
        <Text style={styles.dateText}>{formattedDate}</Text>
        <Text style={styles.timestampText}>{formattedTime}</Text>
      </View>
      <Text style={styles.stepsText}>{`Steps: ${steps.toLocaleString()}`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "white",
    width: "auto",
    height: "auto",
    padding: 10,
    marginTop: 24,
    borderWidth: 2,
    marginLeft: 10,
    marginRight: 10,
  },
  dateTimeContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  dateText: {
    fontSize: 14,
    marginRight: 5,
  },
  timestampText: {
    fontSize: 12,
    color: "gray",
    marginRight: 10,
  },
  stepsText: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
  },
});
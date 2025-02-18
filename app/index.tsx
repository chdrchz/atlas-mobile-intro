import { useActivitiesContext } from "@/components/ActivitiesProvider";
import { Link, router } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function Index() {
  const { activities } = useActivitiesContext();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {activities.map((activity) => (
        <Text key={activity.id}>
          {activity.steps} steps on{" "}
          {new Date(activity.date).toLocaleDateString()}
        </Text>
      ))}
      <Link href={"/add-activity-screen"} replace>
        <Text>Add Activity</Text>
      </Link>
    </View>
  );
}

import { useActivitiesContext } from "@/components/ActivitiesProvider";
import { Link, router } from "expo-router";
import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function AddActivityScreen() {
    const [steps, setSteps] = useState<number>(0);
    const { insertActivity } = useActivitiesContext();
    return (
        <View style={styles.container}>
            <Text>AddActivityScreen</Text>
            <TextInput placeholderTextColor="black" placeholder="Enter Steps" keyboardType="number-pad" onChangeText={(value) => setSteps(parseInt(value))}/>
            <Pressable onPress={() => {
                insertActivity(steps, new Date());
                router.push("/");
            }}>
                <Text>Add Activity</Text>
            </Pressable>
            <Link href={"/"} replace>
                <Text>Go Back</Text>
            </Link>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    input: {
        color: "black",
    }
});
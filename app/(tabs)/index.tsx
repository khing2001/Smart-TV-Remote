import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";

export default function App() {
  const handlePress = (action: string) => {
    console.log(`Button pressed: ${action}`);
  };
  const [lastPressed, setLastPressed] = useState<string | null>(null);

  useEffect(() => {
    if (lastPressed != null){
      console.log(`(Effect) last pressed: ${lastPressed}`);
      Alert.alert("You pressed:", lastPressed);
    }
  }, [lastPressed]);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Smart TV Remote</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => 
          {handlePress("Power");
          setLastPressed("Power");
        }}
  
      >
        <Text style={styles.buttonText}>Power</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => 
          {handlePress("Volume Up");
           setLastPressed("Volume Up");
          }}
      >
        <Text style={styles.buttonText}>Volume +</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          handlePress("Volume Down");
          setLastPressed("Volume Down");
        }}
      >
        <Text style={styles.buttonText}>Volume -</Text>
      </TouchableOpacity>

      {/*<Text style={styles.status}> Last pressed: {lastPressed}</Text>*/}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "white",
    fontSize: 28,
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#1e88e5",
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    width: 200,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
  status: {
    color: "white",
    fontSize: 18,
    backgroundColor: "#ffd700",
    padding: 2,
    borderRadius: 10,
    marginTop: 50,
  },
});

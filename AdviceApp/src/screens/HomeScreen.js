import React, { useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ActivityIndicator,
    SafeAreaView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { getRandomAdvice } from "../api/adviceApi";
import AdviceCard from "../components/AdviceCard";

export default function HomeScreen() {
    const [advice, setAdvice] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

async function handleFetchAdvice() {
    setLoading(true);
    setError(null);
    try {
        const data = await getRandomAdvice();
        setAdvice(data);
    } catch (err) {
        setError("Não foi possivel buscar um conselho. Tente Novamente")
    } finally {
        setLoading(false);
    }
    
}
return (
    <SafeAreaView style={StyleSheet.container}>
        <StatusBar style="ligth" />

        <Text style={styles.title}> Conselhos Aleatórios</Text>
        <Text style={styles.subtitle}>
            Consumindo a Advice Slip API com Axios
        </Text>

        <View style={styles.content}>
            {loading ? (
                <ActivityIndicator size="large" color="#6C63FF" />
            ) : (
                <AdviceCard advice={advice} />
            )}
            {error && <Text style={styles.error}>{error}</Text>}
        </View>

        <TouchableOpacity
        style={styles.button}
        onPress={handleFetchAdvice}
        disabled={loading}
        activeOpacity={0.8}>

        <Text style={styles.buttonText}>
            {loading ? "Buscando..." : "Ver Conselho"}
        </Text>

        </TouchableOpacity>
        </SafeAreaView>
);

}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: "#6C63FF",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginTop: 20,
  },
  subtitle: {
    fontSize: 14,
    color: "#E0DFFF",
    marginTop: 4,
    marginBottom: 24,
  },
  content: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
  },
  error: {
    color: "#FFD1D1",
    textAlign: "center",
    marginTop: 16,
  },
  button: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 30,
    marginBottom: 40,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "#6C63FF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function AdviceCard({ advice }) {
  if (!advice) {
    return (
      <View style={styles.card}>
        <Text style={styles.placeholder}>
          Toque no botão abaixo para receber um conselho ✨
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.card}>
      <Text style={styles.quoteMark}>“</Text>
      <Text style={styles.adviceText}>{advice.advice}</Text>
      <Text style={styles.adviceId}>Conselho #{advice.id}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    minHeight: 160,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  quoteMark: {
    fontSize: 40,
    color: "#6C63FF",
    lineHeight: 40,
  },
  adviceText: {
    fontSize: 18,
    textAlign: "center",
    color: "#333333",
    lineHeight: 26,
    marginTop: 4,
  },
  adviceId: {
    marginTop: 16,
    fontSize: 12,
    color: "#999999",
  },
  placeholder: {
    fontSize: 16,
    textAlign: "center",
    color: "#999999",
  },
});
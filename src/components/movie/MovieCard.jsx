import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export const MovieCard = ({
  poster,
  title,
  year,
  director,
  duration,
  genre,
  rate,
  description,
}) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: poster }} style={styles.poster} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.year}>{year}</Text>
      <Text style={styles.director}>{director}</Text>
      <Text style={styles.duration}>{duration}</Text>
      <Text style={styles.genre}>{genre}</Text>
      <Text style={styles.rate}>{rate}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 10,
    padding: 10,
  },
  poster: {
    width: 450,
    height: 700,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    color: "black",
  },
  year: {
    fontSize: 8,
    fontWeight: "bold",
    color: "black",
  },
  director: {
    fontSize: 10,
    fontWeight: "bold",
    color: "black",
  },
  duration: {
    fontSize: 8,
    fontWeight: "bold",
    color: "black",
  },
  genre: {
    fontSize: 8,
    fontWeight: "bold",
    color: "black",
  },
  rate: {
    fontSize: 12,
    fontWeight: "bold",
    color: "black",
  },
  description: {
    marginTop: 5,
    fontSize: 14,
    color: "#666",
  },
});

export default MovieCard;

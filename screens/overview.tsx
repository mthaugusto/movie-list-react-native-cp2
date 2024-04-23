import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Overview() {
  const navigation = useNavigation();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch('http://192.168.56.1:8080/movies');
        const json = await response.json();
        setMovies(json);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovies();
  }, []);

  const handleMoviePress = (movie) => {
    navigation.navigate('Details', { movieDetails: movie });
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.titleTasks}>FILMES</Text>
      </View>
      <View style={styles.main}>
        <FlatList
          data={movies}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleMoviePress(item)} style={styles.containerMovie}>
              <Text style={styles.movieTitle}>{item.title}</Text>
              <Text style={styles.movieYear}>{item.year}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#000',
  },
  main: {
    flex: 1,
    maxWidth: 960,
    marginHorizontal: 'auto',
    justifyContent: 'space-between',
  },
  containerMovie: {
    padding: 16,
    marginVertical: 8,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
  },
  movieTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  movieYear: {
    fontSize: 16,
  },
  containerTitle: {
    marginBottom: 24,
  },
  titleTasks: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
});

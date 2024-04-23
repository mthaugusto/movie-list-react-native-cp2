import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';

import { RootStackParamList } from '../navigation';

type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;

export default function Details() {
  const route = useRoute<DetailsScreenRouteProp>();
  const { movieDetails } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Título:</Text>
        <Text style={styles.info}>{movieDetails.title}</Text>
        <Text style={styles.title}>Ano:</Text>
        <Text style={styles.info}>{movieDetails.year}</Text>
        <Text style={styles.title}>Duração:</Text>
        <Text style={styles.info}>{movieDetails.runtime} minutos</Text>
        <Text style={styles.title}>Gêneros:</Text>
        <Text style={styles.info}>{movieDetails.genres}</Text>
        <Text style={styles.title}>Diretor:</Text>
        <Text style={styles.info}>{movieDetails.director}</Text>
        <Text style={styles.title}>Atores:</Text>
        <Text style={styles.info}>{movieDetails.actors}</Text>
        <Text style={styles.title}>Sinopse:</Text>
        <Text style={styles.info}>{movieDetails.plot}</Text>
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
    marginHorizontal: 'auto',
    justifyContent: 'center',
    backgroundColor: '#f9f9f9',
    padding: 16,
    borderRadius: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  info: {
    fontSize: 18,
    marginBottom: 16,
  },
});

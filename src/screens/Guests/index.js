import React, {useState} from 'react';
import {View, ImageBackground, Text, FlatList} from 'react-native';
import styles from './styles';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const GuestsScreen = (props) => {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  return (
    <View>
      {/* Row 1: Adults */}
      <View style={styles.row}>
        {/* Titles */}
        <View>
          <Text style={styles.title}>Adults</Text>
          <Text style={styles.secondaryTitle}>Ages 13 or above</Text>
        </View>

        {/* Button with value */}
        <View style={styles.buttonsContainer}>
          {/* Minus button */}
          <Pressable
            onPress={() => setAdults(Math.max(0, adults - 1))}
            style={styles.button}>
            <Text style={styles.buttonText}>-</Text>
          </Pressable>

          {/* Value */}
          <Text style={styles.value}>{adults}</Text>
          {/* Plus button */}

          <Pressable
            onPress={() => setAdults(adults + 1)}
            style={styles.button}>
            <Text style={styles.buttonText}>+</Text>
          </Pressable>
        </View>
      </View>

      {/* Row 2: Children */}

      <View style={styles.row}>
        {/* Titles */}
        <View>
          <Text style={styles.title}>Children</Text>
          <Text style={styles.secondaryTitle}>Ages 2-12</Text>
        </View>

        {/* Button with value */}
        <View style={styles.buttonsContainer}>
          {/* Minus button */}
          <Pressable
            onPress={() => setChildren(Math.max(0, children - 1))}
            style={styles.button}>
            <Text style={styles.buttonText}>-</Text>
          </Pressable>

          {/* Value */}
          <Text style={styles.value}>{children}</Text>
          {/* Plus button */}

          <Pressable
            onPress={() => setChildren(children + 1)}
            style={styles.button}>
            <Text style={styles.buttonText}>+</Text>
          </Pressable>
        </View>
      </View>

      {/* Row 3: Infants */}
      <View style={styles.row}>
        {/* Titles */}
        <View>
          <Text style={styles.title}>Infants</Text>
          <Text style={styles.secondaryTitle}>Under 2</Text>
        </View>

        {/* Button with value */}
        <View style={styles.buttonsContainer}>
          {/* Minus button */}
          <Pressable
            onPress={() => setInfants(Math.max(0, infants - 1))}
            style={styles.button}>
            <Text style={styles.buttonText}>-</Text>
          </Pressable>

          {/* Value */}
          <Text style={styles.value}>{infants}</Text>
          {/* Plus button */}

          <Pressable
            onPress={() => setInfants(infants + 1)}
            style={styles.button}>
            <Text style={styles.buttonText}>+</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default GuestsScreen;

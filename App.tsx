/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';

import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

function App(): React.JSX.Element {
  const [buttonCLicked, setButtonCLicked] = useState(false);
  const [randomBackground, setRandomBackground] = useState('#ffffff');
  const [box1randomBackground, setbox1RandomBackground] = useState('#FFC0CB');
  const [box2randomBackground, setbox2RandomBackground] = useState('#F5F5DC');

  useEffect(() => {
    if (buttonCLicked) {
      const bigBox = () => {
        const hexRange = '0123456789ABCDEF';
        let color = '#';
        for (let index = 0; index < 6; index++) {
          color += hexRange[Math.floor(Math.random() * 16)];
        }
        setRandomBackground(color);
      };

      const Box1 = () => {
        const hexRange = '0123456789ABCDEF';
        let color = '#';
        for (let index = 0; index < 6; index++) {
          color += hexRange[Math.floor(Math.random() * 16)];
        }
        setbox1RandomBackground(color);
      };

      const Box2 = () => {
        const hexRange = '0123456789ABCDEF';
        let color = '#';
        for (let index = 0; index < 6; index++) {
          color += hexRange[Math.floor(Math.random() * 16)];
        }
        setbox2RandomBackground(color);
      };
      bigBox();
      Box1();
      Box2();
    }
  },[buttonCLicked]);

  const generateColor = () => {
    setButtonCLicked(true);
  };

  return (
    <>
      <StatusBar backgroundColor={randomBackground} />

      <View style={[styles.container, {backgroundColor: randomBackground}]}>
        <View style={[styles.box1, {backgroundColor: box1randomBackground}]}>
          <Text> Hii</Text>
        </View>

        <View style={[styles.box2, {backgroundColor: box2randomBackground}]}>
          <Text> Hii</Text>
        </View>

        <TouchableOpacity onPress={generateColor}>
          <View style={styles.actionBtn}>
            <Text style={styles.actionBtnTxt}> Press me</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  box1: {
    backgroundColor: 'pink',
    width: 100,
    height: 100,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },

  box2: {
    backgroundColor: 'beige',
    width: 100,
    height: 100,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionBtn: {
    borderRadius: 12,
    backgroundColor: '#6A1B4D',
    paddingVertical: 10,
    paddingHorizontal: 40,
  },
  actionBtnTxt: {
    fontSize: 24,
    color: '#FFFFFF',
    textTransform: 'uppercase',
  },
});

export default App;

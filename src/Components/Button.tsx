import React, {ReactNode} from 'react';
import {Pressable, StyleSheet, Text, useWindowDimensions} from 'react-native';
import { appState } from '../State';

type ButtonVariant = 'primary' | 'secondary' | 'tertiary';
type ButtonSize = 'normal' | 'large';

type Props = {
  children: ReactNode;
  variant: ButtonVariant;
  size?: ButtonSize;
};

function Button({children, variant, size='normal'}: Props): React.ReactElement {
  const {width} = useWindowDimensions();

  const handlePress = () => {
    console.info('press')
    appState.output += '1';
  };

  return (
    <Pressable onPress={handlePress} style={[styles.container, getBackgroundStyle(variant), getDynamicStyle(width,size)]}>
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
}

const getDynamicStyle = (width: number, size: ButtonSize) => {
  if (size === 'normal') {
    return {
      width: width / 4.5,
      height: width / 4.5,
      borderRadius: width / 9,
    };
  }

  if (size === 'large') {
    return {
      width: width / 2.25,
      height: width / 5,
      borderRadius: width / 5,
      marginLeft: 10,
      paddingRight: width / 4,
    };
  }
};

function getBackgroundStyle(variant: ButtonVariant) {
  let style = null;
  switch (variant) {
    case 'primary':
      style = styles.primary;
      break;
    case 'secondary':
      style = styles.secondary;
      break;
    case 'tertiary':
      style = styles.tertiary;
      break;
  }
  return style;
}

let styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 4,
  },
  primary: {
    backgroundColor: '#F19925',
  },
  secondary: {
    backgroundColor: '#A6A6A6',
  },
  tertiary: {
    backgroundColor: '#333333',
  },
  text: {color: '#fff', fontSize: 18},
});

export default Button;

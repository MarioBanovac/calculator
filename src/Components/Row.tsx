import { View, StyleSheet } from "react-native";

type Props = {
  children: React.ReactNode;
};


function Row({children}: Props): React.ReactElement<Props> {
  return (
    <View style={styles.container}>{children}</View>
  )
}

const styles = StyleSheet.create({
  container: {flexDirection: 'row'},
});

export default Row;

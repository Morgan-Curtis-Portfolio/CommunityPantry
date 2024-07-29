import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'pink',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
      padding: 8,
      fontSize: 14,
      borderRadius: 12,
      borderWidth: 2,
      borderColor: 'blue',
      marginBottom: 8
    },
    buttonContainer: {
      borderRadius: 12,
      overflow: 'hidden',
      width: '20%'
    },
    button: {
      backgroundColor: 'blue',
      alignItems:'center',
      //borderRadius: 12,
      borderWidth: 2,
      paddingHorizontal: 20,
      alignItems: 'center',
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
    },
    avatar: {
        height: 64,
        width: 64,
        borderRadius: '50%',
        borderWidth: 2,
        borderColor:'red'},
      heading: {
        height: 50,
        width: 350,
        fontStyle: 'Kanit',
        fontWeight: 600,
        fontSize: 20,
        paddingTop: 20,
        paddingHorizontal:24,
        paddingBottom: 12,
      },
      title: {
        color: '#280D5F',
        fontSize: 12,
        fontWeight: 600,
        textTransform: 'uppercase',
        textAlign: 'center'
      },
  });

  export default styles;
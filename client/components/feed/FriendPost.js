import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView } from 'react-native';

const FriendPost = (props) => (
    <View style={friendPostStyles.layout}>
      <Image style={friendPostStyles.image} source={{ uri: props.image }} />
      <View style={friendPostStyles.content}>
        <Text style={friendPostStyles.title}>{props.title}</Text>
        <Text style={friendPostStyles.description}>{props.description}</Text>
      </View>
    </View>
  );
  
  const friendPostStyles = StyleSheet.create({
    layout: {
      marginLeft: 12,
      flexDirection: 'row',
      marginVertical: 8,
    },
    image: {
      borderRadius: 12,
      flex: 1,
  
    },
    content: {
      flex: 2,
      paddingLeft: 8,
      
    },
    title: {
      fontWeight: 600,
      fontSize: 14,
      paddingBottom: 8,
      color: '#280D5F'
  
    },
    description: {
      color: '#280D5F'
    },
  });

  export default FriendPost;
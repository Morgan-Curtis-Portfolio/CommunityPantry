import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView } from 'react-native';
import * as React from 'react';
import data from './feedData'
import FriendCard from './components/feed/FriendCard';
import FriendPost from './components/feed/FriendPost';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const FeedScreen = () => (
  <ScrollView>
    <ScrollView horizontal>
    {
        data.friends.map(friend => (
          <FriendCard 
            key={friend.id}
            name={friend.name}
            avatar={friend.avatar}
          />
        ))
      }
    </ScrollView>
    {
      data.posts.map(post => (
        <FriendPost 
          key={post.id}
          image={post.image}
          title={post.title}
          description={post.description}
        />
      ))
    }
  </ScrollView>
);

const MapScreen = () => {
  return (
    <View>
      <Text>This is the Map Screen</Text>
    </View>
  );
}

const ShareScreen = () => (
  <View>
    <Text>This is the Share Screen</Text>
  </View>
);
  
const ProfileScreen = () => (
  <View>
    <Text>This is the Profile Screen</Text>
  </View>
);
  
const Tab = createBottomTabNavigator();

const HomeFeed = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={FeedScreen} />
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Share" component={ShareScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default HomeFeed;
 

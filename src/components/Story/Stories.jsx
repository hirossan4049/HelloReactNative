import React from 'react';
import { FlatList, Flex, Content } from "native-base"
import { StoryItem } from "./StoryItem"


const data = [
      {
        'id': 1,
        'username': 'Afrojack',
        'type': 'story'
      },
      {
        'id': 1,
        'username': 'Afrojack',
        'type': 'story'
      },      {
        'id': 1,
        'username': 'Afrojack',
        'type': 'closeFriend'
      },
      {
        'id': 1,
        'username': 'Afrojack',
        'type': 'closeFriend'
      },
      {
        'id': 1,
        'username': 'Afrojack',
        'type': 'watchedStory'
      },      {
        'id': 1,
        'username': 'Afrojack',
        'type': 'watchedStory'
      },      {
        'id': 1,
        'username': 'Afrojack',
        'type': 'watchedStory'
      },
    ]

export const Stories = () => {

    const renderItem = ({item}) => {
        return <StoryItem type={item.type} username={item.username} />
    }

    return <FlatList
     horizontal
     data={data}
     keyExtractor={item => item.id}
     renderItem={renderItem} />
}

// const DATA = [
//     {
//       id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//       title: 'First Item',
//     },
//     {
//       id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//       title: 'Second Item',
//     },
//     {
//       id: '58694a0f-3da1-471f-bd96-145571e29d72',
//       title: 'Third Item',
//     },
//   ];
  
//   const Item = ({ title }) => (
//     <View style={styles.item}>
//       <Text style={styles.title}>{title}</Text>
//     </View>
//   );
  
//   const App = () => {
//     const renderItem = ({ item }) => (
//       <Item title={item.title} />
//     );
  
//     return (
//       <SafeAreaView style={styles.container}>
//         <FlatList
//           data={DATA}
//           renderItem={renderItem}
//           keyExtractor={item => item.id}
//         />
//       </SafeAreaView>
//     );
//   }
  
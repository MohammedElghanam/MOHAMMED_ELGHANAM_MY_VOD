// import React, { useState } from 'react';
// import { View, Text, Modal, StyleSheet, TouchableOpacity, Image } from 'react-native';
// import { Video, ResizeMode } from 'expo-av';

// export default function MovieDetails({ movie, onClose }: any) {
//   const [showFullDescription, setShowFullDescription] = useState(false);

//   const toggleDescription = () => {
//     setShowFullDescription((prev) => !prev);
//   };

//   return (
//     <Modal
//       visible={true}
//       animationType="fade"
//       transparent={true}
//       onRequestClose={onClose}
//     >
//       <View style={styles.modalOverlay}>
//         <View style={styles.detailsContainer}>
//           {/* Movie Title */}
//           <Text style={styles.title}>{movie.title}</Text>

//           {/* Video Player */}
//           <Video
//             source={{ uri: `${process.env.EXPO_PUBLIC_MEDIA_URL}${movie.videoUrl.split(':9000')[1]}` }}
//             style={styles.videoPlayer}
//             useNativeControls
//             resizeMode={ResizeMode.CONTAIN}
//             isLooping
//           />

//           {/* Description */}
//           <Text style={styles.description}>
//             {showFullDescription ? movie.description : `${movie.description.substring(0, 100)}...`}
//           </Text>

//           {/* Show More/Less */}
//           <TouchableOpacity onPress={toggleDescription}>
//             <Text style={styles.readMore}>
//               {showFullDescription ? 'Show Less' : 'Show More'}
//             </Text>
//           </TouchableOpacity>

//           {/* Movie Genre and Year */}
//           <Text style={styles.genre}>Genre: {movie.categoryId.title}</Text>
//           <Text style={styles.year}>Année: {new Date(movie.releaseYear).getFullYear()}</Text>
//         </View>
//       </View>
//     </Modal>
//   );
// }

// const styles = StyleSheet.create({
//   modalOverlay: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.7)', // Background overlay to dim screen
//   },
//   detailsContainer: {
//     width: '90%',
//     maxHeight: '80%',
//     backgroundColor: 'white',
//     borderRadius: 10,
//     padding: 20,
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginTop: 10,
//     color: '#000',
//   },
//   videoPlayer: {
//     width: '100%',
//     height: 250,
//     backgroundColor: 'black',
//     marginVertical: 20,
//   },
//   description: {
//     marginTop: 10,
//     fontSize: 16,
//     color: '#333',
//     lineHeight: 22,
//     maxHeight: 60, // Limit to 3 lines
//     overflow: 'hidden',
//   },
//   readMore: {
//     color: '#007BFF',
//     marginTop: 5,
//     fontSize: 14,
//     fontWeight: 'bold',
//   },
//   genre: {
//     marginTop: 5,
//     fontSize: 16,
//     color: '#333',
//   },
//   year: {
//     marginTop: 5,
//     fontSize: 16,
//     color: '#333',
//   },
// });


import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { Video, ResizeMode } from 'expo-av';

export default function MovieDetails({ movie }: any) {
  // State to control the video playback
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handlePress = () => {
    setIsVideoPlaying(true); // Start playing the video when clicked
  };

  // Example comments data
  const comments = [
    { id: '1', user: 'John', text: 'Great movie!' },
    { id: '2', user: 'Sarah', text: 'Amazing story, really loved it.' },
    { id: '3', user: 'Alex', text: 'The acting was superb!' },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Video Player */}
      {/* <View style={styles.videoContainer}>
          <Video
            source={{ uri: `${process.env.EXPO_PUBLIC_MEDIA_URL}${movie.videoUrl.split(':9000')[1]}` }}
            style={styles.videoPlayer}
            useNativeControls
            resizeMode={ResizeMode.CONTAIN}
            isLooping
        />
        
      </View> */}

      {/* Title and Description */}
      {/* <View style={styles.textContainer}>
        <Text style={styles.title}>{movie.title}</Text>
        <Text style={styles.description}>
          {movie.description.length > 100
            ? movie.description.slice(0, 100) + '...'
            : movie.description}
        </Text>
      </View> */}

      {/* Comments Section */}
      {/* <View style={styles.commentsSection}>
        <Text style={styles.commentsTitle}>Comments:</Text>
        <FlatList
          data={comments}
          renderItem={({ item }) => (
            <View style={styles.comment}>
              <Text style={styles.commentUser}>{item.user}:</Text>
              <Text style={styles.commentText}>{item.text}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: 'white',
    position: 'relative',
    paddingBlockStart: 10,
  },
  videoContainer: {
    width: '100%',
    height: 250,
    backgroundColor: 'black',
    borderRadius: 10,
    marginBottom: 20,
  },
  videoPlayer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    borderRadius: 10,
  },
  thumbnail: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  textContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  description: {
    marginTop: 10,
    fontSize: 16,
    color: '#666',
  },
  commentsSection: {
    marginTop: 20,
  },
  commentsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  comment: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: 5,
  },
  commentUser: {
    fontWeight: 'bold',
    color: '#333',
  },
  commentText: {
    fontSize: 14,
    color: '#666',
  },
});

















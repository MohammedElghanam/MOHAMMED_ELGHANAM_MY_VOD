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


// import React, { useState } from 'react';
// import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
// import { Video, ResizeMode } from 'expo-av';

// export default function MovieDetails({ movie }: any) {
//   // State to control the video playback
//   const [isVideoPlaying, setIsVideoPlaying] = useState(false);

//   const handlePress = () => {
//     setIsVideoPlaying(true); // Start playing the video when clicked
//   };

//   // Example comments data
//   const comments = [
//     { id: '1', user: 'John', text: 'Great movie!' },
//     { id: '2', user: 'Sarah', text: 'Amazing story, really loved it.' },
//     { id: '3', user: 'Alex', text: 'The acting was superb!' },
//   ];

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       {/* Video Player */}
//       <View style={styles.videoContainer}>
//           <Video
//             source={{ uri: `${process.env.EXPO_PUBLIC_MEDIA_URL}${movie.videoUrl.split(':9000')[1]}` }}
//             style={styles.videoPlayer}
//             useNativeControls
//             resizeMode={ResizeMode.CONTAIN}
//             isLooping
//         />
        
//       </View>

//       {/* Title and Description */}
//       <View style={styles.textContainer}>
//         <Text style={styles.title}>{movie.title}</Text>
//         <Text style={styles.description}>
//           {movie.description.length > 100
//             ? movie.description.slice(0, 100) + '...'
//             : movie.description}
//         </Text>
//       </View>

//       {/* Comments Section */}
//       <View style={styles.commentsSection}>
//         <Text style={styles.commentsTitle}>Comments:</Text>
//         <FlatList
//           data={comments}
//           renderItem={({ item }) => (
//             <View style={styles.comment}>
//               <Text style={styles.commentUser}>{item.user}:</Text>
//               <Text style={styles.commentText}>{item.text}</Text>
//             </View>
//           )}
//           keyExtractor={(item) => item.id}
//         />
//       </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     padding: 20,
//     backgroundColor: 'white',
//     position: 'relative',
//     paddingBlockStart: 10,
//   },
//   videoContainer: {
//     width: '100%',
//     height: 250,
//     backgroundColor: 'black',
//     borderRadius: 10,
//     marginBottom: 20,
//   },
//   videoPlayer: {
//     width: '100%',
//     height: '100%',
//     backgroundColor: 'black',
//     borderRadius: 10,
//   },
//   thumbnail: {
//     width: '100%',
//     height: '100%',
//     borderRadius: 10,
//   },
//   textContainer: {
//     marginBottom: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   description: {
//     marginTop: 10,
//     fontSize: 16,
//     color: '#666',
//   },
//   commentsSection: {
//     marginTop: 20,
//   },
//   commentsTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   comment: {
//     marginTop: 10,
//     padding: 10,
//     backgroundColor: '#f5f5f5',
//     borderRadius: 5,
//   },
//   commentUser: {
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   commentText: {
//     fontSize: 14,
//     color: '#666',
//   },
// });

import React, { useState } from 'react';
import { 
  View, 
  Text, 
  Image, 
  ScrollView, 
  TouchableOpacity, 
  StyleSheet, 
  FlatList, 
  TextInput 
} from 'react-native';
import { Video, ResizeMode } from 'expo-av';

export default function MovieDetails({ movie }: any) {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState([
    { id: '1', user: 'FilmFan99', text: 'Absolutely stunning cinematography!' },
    { id: '2', user: 'MovieBuff', text: 'The director really outdid themselves this time.' },
  ]);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([...comments, {
        id: Date.now().toString(),
        user: 'CurrentUser',
        text: newComment.trim()
      }]);
      setNewComment('');
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Video Player */}
        <Video
          source={{ uri: `${process.env.EXPO_PUBLIC_MEDIA_URL}${movie.videoUrl.split(':9000')[1]}` }}
          style={styles.videoPlayer}
          useNativeControls
          resizeMode={ResizeMode.CONTAIN}
          isLooping
        />

        {/* Movie Metadata */}
        <View style={styles.metadataContainer}>
          <Text style={styles.title}>{movie.title}</Text>
          
          <View style={styles.creatorContainer}>
            <Text style={styles.creatorLabel}>Directed by:</Text>
            <Text style={styles.creatorName}>{movie.userId.name}</Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.genre}>{movie.categoryId.title}</Text>
            <Text style={styles.year}>
              {new Date(movie.releaseYear).getFullYear()}
            </Text>
          </View>

          {/* Description with Read More/Less */}
          <Text style={styles.description}>
            {showFullDescription ? movie.description : `${movie.description.substring(0, 150)}`}
            {movie.description.length > 150 && (
              <Text style={styles.readMore} onPress={toggleDescription}>
                {showFullDescription ? ' Show Less' : '... Show More'}
              </Text>
            )}
          </Text>
        </View>

        {/* Comments Section */}
        <View style={styles.commentsSection}>
          <Text style={styles.sectionTitle}>Community Reviews</Text>
          <FlatList
            data={comments}
            scrollEnabled={false}
            renderItem={({ item }) => (
              <View style={styles.commentCard}>
                <Text style={styles.commentUser}>{item.user}</Text>
                <Text style={styles.commentText}>{item.text}</Text>
              </View>
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      </ScrollView>

      {/* Comment Input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.commentInput}
          placeholder="Add your review..."
          value={newComment}
          onChangeText={setNewComment}
          multiline
        />
        <TouchableOpacity 
          style={styles.postButton} 
          onPress={handleAddComment}
        >
          <Text style={styles.postButtonText}>Post</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 80,
  },
  videoPlayer: {
    width: '100%',
    height: 250,
    borderRadius: 12,
    marginBottom: 20,
  },
  metadataContainer: {
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 8,
  },
  creatorContainer: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  creatorLabel: {
    color: '#6c757d',
    marginRight: 6,
  },
  creatorName: {
    color: '#2c3e50',
    fontWeight: '500',
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  genre: {
    backgroundColor: '#e9ecef',
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 20,
    color: '#495057',
  },
  year: {
    color: '#6c757d',
    fontSize: 16,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#4a4a4a',
  },
  readMore: {
    color: '#007bff',
    fontWeight: '500',
  },
  commentsSection: {
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    paddingTop: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: 15,
  },
  commentCard: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  commentUser: {
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 4,
  },
  commentText: {
    color: '#4a5568',
    lineHeight: 20,
  },
  inputContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  commentInput: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    borderRadius: 25,
    paddingHorizontal: 18,
    paddingVertical: 12,
    marginRight: 12,
    fontSize: 16,
    maxHeight: 100,
  },
  postButton: {
    backgroundColor: '#007bff',
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  postButtonText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 16,
  },
});

















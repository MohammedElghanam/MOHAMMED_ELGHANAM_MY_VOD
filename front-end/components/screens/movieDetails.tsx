import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, FlatList, TextInput, Image } from 'react-native';
import { Video, ResizeMode } from 'expo-av';
import { Ionicons } from '@expo/vector-icons';
import { formatDistanceToNow } from 'date-fns';

export default function MovieDetails({ movie }: any) {
  const createdAt = new Date(movie.createdAt);
  const timeAgo = formatDistanceToNow(createdAt, { addSuffix: true });

  const [newComment, setNewComment] = useState('');
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [comments, setComments] = useState([
    { id: '1', user: 'John', text: 'Great movie!' },
    { id: '2', user: 'Sarah', text: 'Amazing story, really loved it.' },
    { id: '3', user: 'Alex', text: 'The acting was superb!' },
  ]);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([
        ...comments,
        { id: Date.now().toString(), user: 'CurrentUser', text: newComment.trim() },
      ]);
      setNewComment('');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Video Player */}
      <View style={styles.videoContainer}>
        <Video
          source={{ uri: `${process.env.EXPO_PUBLIC_MEDIA_URL}${movie.videoUrl.split(':9000')[1]}` }}
          style={styles.videoPlayer}
          useNativeControls
          resizeMode={ResizeMode.CONTAIN}
          isLooping
        />
      </View>

      {/* Title and Description */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>{movie.title}</Text>
        <View style={styles.infoContainer}>
          <Image source={{ uri: `${process.env.EXPO_PUBLIC_MEDIA_URL}${movie.userId.image.split(':9000')[1]}` }} style={styles.creatorImage} />

          <View style={styles.textContainer}>
            <Text style={styles.title2} numberOfLines={2}>{movie.userId.name}</Text>
            <Text style={styles.subtitle}> • {movie.views} vues • { timeAgo }</Text>
          </View>

          <TouchableOpacity style={styles.menuIcon}>
            <Ionicons name="ellipsis-vertical" size={20} color="#999" />
          </TouchableOpacity>
        </View>

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
      </View>

      {/* Comment Input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.commentInput}
          placeholder="Add your review..."
          value={newComment}
          onChangeText={setNewComment}
          multiline
        />
        <TouchableOpacity style={styles.postButton} onPress={handleAddComment}>
          <Text style={styles.postButtonText}>Post</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    // padding: 20,
    backgroundColor: 'black',
  },
  videoContainer: {
    width: '100%',
    height: 200,
    backgroundColor: 'black',
    // borderRadius: 10,
    marginBottom: 20,
  },
  videoPlayer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    // borderRadius: 10,
  },
  textContainer: {
    marginBottom: 12,
    paddingLeft: 12,
    paddingRight: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  title2: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
  },
  description: {
    backgroundColor: '#333',
    padding: 10,
    borderRadius:10,
    marginTop: 10,
    fontSize: 13,
    color: '#fff',
  },
  readMore: {
    color: '#007bff',
    fontWeight: 'bold',
  },
  commentsSection: {
    marginTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
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
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    borderTopWidth: 1,
    borderColor: '#ddd',
    paddingTop: 10,
  },
  commentInput: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ddd',
    marginRight: 10,
    height: 40,
    backgroundColor: '#f9f9f9',
  },
  postButton: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    backgroundColor: '#007bff',
    borderRadius: 5,
  },
  postButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    paddingHorizontal: 10,
  },
  creatorImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  menuIcon: {
    padding: 8,
  },
});

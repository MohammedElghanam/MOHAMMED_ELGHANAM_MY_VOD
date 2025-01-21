import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";

export default function Register() {
  const router = useRouter();

  return (
    <View className="flex-1 justify-center items-center bg-gray-100 p-4">
      {/* Logo */}
      <Image
        source={{ uri: "https://via.placeholder.com/150" }}
        className="w-24 h-24 rounded-full mb-6"
      />

      {/* Header */}
      <Text className="text-3xl font-extrabold text-gray-800 mb-2">
        Inscription
      </Text>
      <Text className="text-gray-500 mb-6 text-center">
        Créez un compte pour commencer votre expérience.
      </Text>

      {/* Input Fields */}
      <TextInput
        placeholder="Nom d'utilisateur"
        className="w-full bg-white p-4 rounded-lg mb-4 shadow-sm border border-gray-300"
      />
      <TextInput
        placeholder="Email"
        keyboardType="email-address"
        className="w-full bg-white p-4 rounded-lg mb-4 shadow-sm border border-gray-300"
      />
      <TextInput
        placeholder="Mot de passe"
        secureTextEntry
        className="w-full bg-white p-4 rounded-lg mb-6 shadow-sm border border-gray-300"
      />

      {/* Register Button */}
      <TouchableOpacity className="w-full bg-blue-500 p-4 rounded-lg shadow-md">
        <Text className="text-white text-center font-bold text-lg">
          S'inscrire
        </Text>
      </TouchableOpacity>

      {/* Login Redirect */}
      <TouchableOpacity
        className="mt-4"
        onPress={() => router.push("/login")}
      >
        <Text className="text-gray-600">
          Vous avez déjà un compte ?{" "}
          <Text className="text-blue-500 font-semibold">Connectez-vous</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}

import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";

export default function Login() {
  const router = useRouter();

  return (
    <View className=" h-full flex justify-center items-center bg-gray-100 p-4">
      {/* Logo */}
      <Image
        source={{ uri: "https://via.placeholder.com/150" }}
        className="w-24 h-24 rounded-full mb-6"
      />

      {/* Header */}
      <Text className="text-3xl font-extrabold text-gray-800 mb-2">
        Connexion
      </Text>
      <Text className="text-gray-500 mb-6 text-center">
        Connectez-vous pour accéder à votre compte.
      </Text>

      {/* Input Fields */}
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

      {/* Login Button */}
      <TouchableOpacity className="w-full bg-blue-500 p-4 rounded-lg shadow-md">
        <Text className="text-white text-center font-bold text-lg">
          Se connecter
        </Text>
      </TouchableOpacity>

      {/* Register Redirect */}
      <TouchableOpacity
        className="mt-4"
        onPress={() => router.push("/register")}
      >
        <Text className="text-gray-600">
          Pas encore de compte ?{" "}
          <Text className="text-blue-500 font-semibold">Inscrivez-vous</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}

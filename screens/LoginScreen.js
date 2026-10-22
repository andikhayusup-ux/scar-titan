
import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Alert,
} from 'react-native';

export default function LoginScreen({
  email,
  setEmail,
  password,
  setPassword,
  onLogin,
}) {
  const handleLogin = () => {
    if (!email.trim() || !password) {
      Alert.alert('Peringatan', 'Email dan password harus diisi!');
      return;
    }

    onLogin();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <View style={styles.content}>
          <Text style={styles.title}>MY APP</Text>
          <Text style={styles.subtitle}>UTS MOBILE 1</Text>

          <TextInput
            style={styles.input}
            placeholder="INPUT EMAIL"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <TextInput
            style={styles.input}
            placeholder="INPUT PASSWORD"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <TouchableOpacity
            style={styles.button}
            onPress={handleLogin}
          >
            <Text style={styles.buttonText}>
              TOMBOL LOGIN
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAF2FF',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  card: {
    width: '100%',
    maxWidth: 380,
    height: '85%',
    minHeight: 480,
    backgroundColor: '#FFFFFF',
    borderRadius: 28,
    elevation: 10,
    shadowColor: '#1E40AF',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 15,
    overflow: 'hidden',
  },

  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 28,
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2563EB',
    letterSpacing: 2,
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#64748B',
    marginBottom: 45,
    letterSpacing: 1,
  },

  input: {
    width: '100%',
    height: 52,
    backgroundColor: '#F1F5F9',
    borderWidth: 1,
    borderColor: '#DCE5F2',
    borderRadius: 14,
    marginBottom: 16,
    paddingHorizontal: 18,
    textAlign: 'left',
    color: '#1E293B',
    fontSize: 14,
  },

  button: {
    width: '100%',
    height: 52,
    backgroundColor: '#2563EB',
    borderRadius: 14,
    marginTop: 12,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#2563EB',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
  },

  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFFFFF',
    letterSpacing: 1,
  },
});

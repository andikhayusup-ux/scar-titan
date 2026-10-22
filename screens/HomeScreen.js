
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
  Alert,
} from 'react-native';

export default function HomeScreen({ email, onLogout }) {
  const nama = email.split('@')[0].toUpperCase();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>HOME PAGE</Text>

        <View style={styles.profile}>
         <Image
  source={require('../assets/poto-profil.jpeg')}
  style={styles.photo}
  resizeMode="cover"
/>

          <Text style={styles.name}>
            {nama || 'NAMA KAMU'}
          </Text>
        </View>

        <View style={styles.menuContainer}>
          {[1, 2, 3, 4].map((item) => (
            <TouchableOpacity
              key={item}
              style={styles.menu}
              onPress={() =>
                Alert.alert('Menu', `Kamu memilih MENU ${item}`)
              }
            >
              <Text style={styles.menuText}>
                MENU {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity
          style={styles.logout}
          onPress={onLogout}
        >
          <Text style={styles.logoutText}>
            TOMBOL LOGOUT
          </Text>
        </TouchableOpacity>
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
    padding: 24,
    alignItems: 'center',
    elevation: 10,
    shadowColor: '#1E40AF',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 15,
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#2563EB',
    letterSpacing: 1.5,
    marginTop: 15,
    marginBottom: 28,
  },

  profile: {
    width: '100%',
    minHeight: 175,
    backgroundColor: '#F1F5F9',
    borderWidth: 1,
    borderColor: '#DCE5F2',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    marginBottom: 24,
  },

  photo: {
    width: 85,
    height: 85,
    borderRadius: 43,
    borderWidth: 3,
    borderColor: '#FFFFFF',
    marginBottom: 12,
    backgroundColor: '#DCE5F2',
  },

  name: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#1E293B',
    letterSpacing: 1,
  },

  menuContainer: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  menu: {
    width: '48%',
    height: 58,
    backgroundColor: '#EFF6FF',
    borderWidth: 1,
    borderColor: '#BFDBFE',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },

  menuText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2563EB',
  },

  logout: {
    width: '75%',
    height: 46,
    backgroundColor: '#EF4444',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 18,
    elevation: 3,
    shadowColor: '#EF4444',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },

  logoutText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#FFFFFF',
    letterSpacing: 0.5,
  },
});

import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { account } from './appwrite';
import { ID } from 'appwrite';

export default function RegisterScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async () => {
    try {
      await account.create(ID.unique(), email, password);
      // Handle successful registration (e.g., navigate to login)
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <View>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput placeholder="Password" secureTextEntry value={password} onChangeText={setPassword} />
      <Button title="Register" onPress={handleRegister} />
      {error ? <Text style={{ color: 'red' }}>{error}</Text> : null}
    </View>
  );
}

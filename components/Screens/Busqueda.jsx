import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { styles, pickerSelectStyles } from '../../styles/Busqueda';
import { Logo } from '../Logo';

const SearchScreen = ({ navigation }) => {
    const [region, setRegion] = useState('');
    const [realm, setRealm] = useState('');
    const [characterName, setCharacterName] = useState('');

    const handleSearch = () => {
        navigation.navigate('Detalles', { region, realm, characterName });
    };

    return (
        <View style={styles.container}>
            <Logo />
            <View style={styles.inputContainer}>
                <RNPickerSelect
                    placeholder={{ label: 'Seleccione una Región', value: null }}
                    onValueChange={(value) => setRegion(value)}
                    items={[
                        { label: 'America', value: 'us' },
                        { label: 'Europa', value: 'eu' },
                        { label: 'Taiwan', value: 'tw' },
                        { label: 'Corea', value: 'kr' },
                        { label: 'China', value: 'cn' },
                    ]}
                    style={pickerSelectStyles}
                    value={region}
                />
            </View>
            <TextInput
                placeholder="Ingrese un Reino"
                value={realm}
                onChangeText={text => setRealm(text)}
                style={styles.input}
            />
            <TextInput
                placeholder="Nombre del personaje"
                value={characterName}
                onChangeText={text => setCharacterName(text)}
                style={styles.input}
            />
            <Button
                style={styles.button}
                title="Buscar"
                onPress={handleSearch} />
        </View>
    );

};
export default SearchScreen;
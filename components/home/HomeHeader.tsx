import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Title from '../Title';
import useStore from '@/store/useStore';

export default function HomeHeader() {
    const { currentCountry, setCurrnetCountry } = useStore();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Seçilen ülkeyi dönen fonksiyon
    const SELECETD = () => {
        if (currentCountry === 'TR')
            return 'Türkiye, TR';
        else if (currentCountry === 'IT')
            return 'İtalya, IT';
        else
            return '';
    };

    const locations = [
        { name: 'Türkiye, TR', code: 'TR' },
        { name: 'İtalya, IT', code: 'IT' },
    ];

    const handleLocationSelect = (code: string) => {
        setCurrnetCountry(code); // Ülke kodunu güncelle
        setIsDropdownOpen(false); // Dropdown'u kapat
    };

    return (
        <>
            <View style={{ flexDirection: 'row', marginBottom: 10, paddingHorizontal: 8, justifyContent: 'space-between', marginTop: 10 }}>
                <Text style={{ fontSize: 15 }}>Keşfet</Text>

                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                    <Icon name='location' size={15} color={'#196EEE'} />
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }} onPress={() => setIsDropdownOpen(!isDropdownOpen)}>
                        <Text style={{ fontSize: 15 }}>{SELECETD()}</Text>
                        <MaterialIcon name='keyboard-arrow-down' size={25} color={'#196EEE'} />
                    </TouchableOpacity>
                </View>
            </View>

            {isDropdownOpen && (
                <>
                    <TouchableOpacity
                        style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }}
                        onPress={() => setIsDropdownOpen(false)}
                    />

                    {/* Dropdown Menü */}
                    <View style={{ position: 'absolute', right: 10, zIndex: 10, width: 120, top: 35, paddingHorizontal: 8, borderColor: '#196EEE', borderWidth: 1, borderRadius: 5, backgroundColor: 'white' }}>
                        {locations
                            .filter((location) => location.code !== currentCountry) // Seçili olan lokasyonu filtrele
                            .map((location, index) => (
                                <TouchableOpacity key={index} onPress={() => handleLocationSelect(location.code)}>
                                    <Text style={{ fontSize: 15, padding: 8 }}>{location.name}</Text>
                                </TouchableOpacity>
                            ))}
                    </View>
                </>
            )}

            <View style={{ paddingHorizontal: 8 }}>
                <Title text='ASPEN' size={32} weight='800' />
            </View>
        </>
    );
}

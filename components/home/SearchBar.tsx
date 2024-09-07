import React, { useState } from 'react'
import { TouchableOpacity, TextInput, View } from 'react-native'
import Icon from "react-native-vector-icons/AntDesign"

export default function SearchBar() {
    const [search, SetSearch] = useState("")
    return (
        <View style={{ marginTop: 24, flex: 1, paddingHorizontal: 8, }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#F3F8FE', borderRadius: 24, paddingHorizontal: 16 }}>
                <TouchableOpacity>
                    <Icon name='search1' size={20} color={'#B8B8B8'} />
                </TouchableOpacity>
                <TextInput
                    placeholder='Find things to do'
                    onChangeText={newText => SetSearch(newText)}
                    style={{ width: '100%', color: '#B8B8B8', fontSize: 14, paddingHorizontal: 16, backgroundColor: '#F3F8FE', height: 52, }} />
            </View>
        </View>
    )
}

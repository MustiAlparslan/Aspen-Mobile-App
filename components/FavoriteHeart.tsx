import React from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

function FavoriteHeart({...props}: any) {
    return (
        <TouchableOpacity  style={{ width: 30, height: 30, backgroundColor: 'white', borderRadius: 50, alignItems: 'center', justifyContent: 'center',...props }}>
            <Icon name="heart" size={15} color="#EC5655" />
        </TouchableOpacity>
    )
}

export default FavoriteHeart
import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Scroll from '../Scroll';
import useStore from '@/store/useStore';


interface List {
    id: number;
    defaultActive: boolean;
    isActive: boolean;
    title: string;
    name: string;
}

const CategoryMap = () => {
    const { currentCategory, setCurrentCategory } = useStore();

    const [list, setList] = useState<List[]>([
        {
            id: 1,
            title: 'Location',
            name: 'Konumlar',
            defaultActive: true,
            isActive: true
        },
        {
            id: 2,
            title: 'Hotels',
            name: 'Oteller',
            defaultActive: false,
            isActive: false
        },
        {
            id: 3,
            title: 'Food',
            name: 'Restoranlar',
            defaultActive: false,
            isActive: false
        },
        {
            id: 4,
            title: 'Adventure',
            name: 'Macera',
            defaultActive: false,
            isActive: false
        },
    ]);


    const OnPress = (item: List) => {
        setCurrentCategory(item?.title);
        setList(prevList =>
            prevList.map(category => {
                if (item.id === category.id) {
                    if (category.isActive) {
                        return category;
                    }
                    if (item.defaultActive === true) {
                        return {
                            ...category,
                            defaultActive: true,
                            isActive: true,
                        };
                    } else {
                        return {
                            ...category,
                            isActive: true,
                        };
                    }
                } else {
                    return {
                        ...category,
                        isActive: false,
                    };
                }
            })
        );
    };

    return (
        <React.Fragment>
            {list ? list.map(item => (
                <TouchableOpacity key={item?.id} onPress={() => OnPress(item)} style={[styles.button,
                item.isActive ? styles.buttonValid : styles.buttonInvalid]}
                >
                    <Text style={[styles.text,
                    item.isActive ? styles.textValid : styles.textInvalid]}
                    >{item?.name}</Text>
                </TouchableOpacity>
            )) : <></>
            }
        </React.Fragment >
    )
}

export default function Category() {
    return (
        <View style={{ marginTop: 32, paddingHorizontal: 8, flexDirection: 'row', alignItems: 'center', gap: 24 }}>
            <Scroll horizontal={true} showsHorizontalScrollIndicator={false}>
                <CategoryMap />
            </Scroll>
        </View>
    )
}



const styles = StyleSheet.create({
    button: {
        height: 42,
        borderRadius: 24,
        marginRight: 8,
        paddingHorizontal: 15, alignItems: 'center', justifyContent: 'center',
    },
    buttonValid: {
        backgroundColor: '#F3F8FE',
    },
    buttonInvalid: {
        backgroundColor: 'white',
    },
    text: { fontSize: 14, fontWeight: 'bold', },
    textValid: {
        color: '#196EEE'
    },
    textInvalid: { color: '#B8B8B8' },
});
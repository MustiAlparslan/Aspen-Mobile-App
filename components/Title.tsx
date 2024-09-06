import React from 'react'
import { Text } from 'react-native'

interface PropTypes {
    text: string;
    size: number;
    weight: 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
    style?: Object;
    props?: any;
}

export default function Title({ text, size, weight, ...props }: PropTypes) {
    console.log(props?.style);
    return (
        <Text  style={{ fontSize: size, fontWeight: weight, ...props?.style }}>{text}</Text>
    )
}

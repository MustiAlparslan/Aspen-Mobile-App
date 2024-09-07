import React from 'react'
import { ScrollView } from 'react-native'

interface Props {
  children: React.ReactNode;
  [key: string]: any;
}

function Scroll({ children, ...restProps }: Props) {
  return (
    <ScrollView {...restProps} >{children}</ScrollView>
  )
}

export default Scroll
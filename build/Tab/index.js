import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Foundation from 'react-native-vector-icons/Foundation'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons
  from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Zocial from 'react-native-vector-icons/Zocial'
import { TabText, TabBody, TabButton, IconStyle } from './styles'
const Tab = ({
  activeTextColor,
  active,
  onPress,
  text,
  inActiveTextColor,
  tabWidth,
  stretch,
  contentType,
  iconSet,
  itemStyle,
  upperCase
}) => {
  const color = active ? activeTextColor : inActiveTextColor
  const renderTextTab = (color, text, itemStyle) => {
    return (
      <TabText color={color} style={itemStyle}>
        {upperCase ? text.toUpperCase() : text}
      </TabText>
    )
  }
  const renderIconTab = (color, text, iconSet, itemStyle) => {
    switch (iconSet) {
      case 'Entypo':
        return (
          <Entypo
            name={text}
            style={[{ color: color }, IconStyle, itemStyle]}
          />
        )
      case 'EvilIcons':
        return (
          <Entypo
            name={text}
            style={[{ color: color }, IconStyle, itemStyle]}
          />
        )
      case 'FontAwesome':
        return (
          <FontAwesome
            name={text}
            style={[{ color: color }, IconStyle, itemStyle]}
          />
        )
      case 'Foundation':
        return (
          <Foundation
            name={text}
            style={[{ color: color }, IconStyle, itemStyle]}
          />
        )
      case 'Ionicons':
        return (
          <Ionicons
            name={text}
            style={[{ color: color }, IconStyle, itemStyle]}
          />
        )
      case 'MaterialCommunityIcons':
        return (
          <MaterialCommunityIcons
            name={text}
            style={[{ color: color }, IconStyle, itemStyle]}
          />
        )
      case 'MaterialIcons':
        return (
          <MaterialIcons
            name={text}
            style={[{ color: color }, IconStyle, itemStyle]}
          />
        )
      case 'SimpleLineIcons':
        return (
          <SimpleLineIcons
            name={text}
            style={[{ color: color }, IconStyle, itemStyle]}
          />
        )
      case 'Zocial':
        return (
          <Zocial
            name={text}
            style={[{ color: color }, IconStyle, itemStyle]}
          />
        )
      default:
        return (
          <Ionicons
            name={text}
            style={[{ color: color }, IconStyle, itemStyle]}
          />
        )
    }
  }
  const renderTab = (contentType, color, text, iconSet, itemStyle) => {
    switch (contentType) {
      case 'text':
        return renderTextTab(color, text, itemStyle)
      case 'icon':
        return renderIconTab(color, text, iconSet, itemStyle)
      default:
        return renderTextTab(color, text, itemStyle)
    }
  }
  return (
    <TabButton onPress={onPress} tabWidth={tabWidth} stretch={stretch}>
      <TabBody>
        {renderTab(contentType, color, text, iconSet, itemStyle)}
      </TabBody>
    </TabButton>
  )
}
export default Tab

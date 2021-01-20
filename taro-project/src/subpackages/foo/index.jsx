import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import { printCommon } from '../../common'
import { printTool } from '../../common/tools'

export default class Index extends Component {
  componentDidMount () {
    printCommon()
    printTool()
  }

  render () {
    return (
      <View className='index'>
        <Text>Page foo</Text>
      </View>
    )
  }
}

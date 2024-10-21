import React, { memo } from 'react'
import { HeaderCategory } from './style'

import AppNavBar from '@/components/nav-bar'

import { renderRoutes } from 'react-router-config'
import {
  useChangeDropBoxState,
  useGlobalKeyboardEvent,
} from '@/hooks/change-state'

export default memo(function JMDiscover(props) {
  // props/state
  const { route } = props

  // custom hook
  useGlobalKeyboardEvent() // 全局注册 ctrl+k 唤醒下拉框

  return (
    <HeaderCategory onClick={useChangeDropBoxState()}>
      {/* 导航栏 */}
      <AppNavBar />
      {renderRoutes(route.routes)}
    </HeaderCategory>
  )
})

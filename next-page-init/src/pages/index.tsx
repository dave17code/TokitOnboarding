import React from 'react'

import { NextSeo } from 'next-seo'

import HomeLayout from '@/components/@Layout/HomeLayout'
import Home from '@/containers/Home'

function HomePage() {
  return (
    <>
      {/* output: 똑똑한개발자 | 메인 */}
      {/* titleTemplate는 /configs/seo/config.ts에서 변경 가능합니다. */}
      {/* <NextSeo title="메인" />
      <HomeLayout content={<Home />} /> */}
      <h1>Hello World</h1>
    </>
  )
}

export default HomePage

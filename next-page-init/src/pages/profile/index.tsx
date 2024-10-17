import { NextSeo } from 'next-seo'

import HomeLayout from '@/components/@Layout/HomeLayout'
import Profile from '@/containers/Profile'
import withUnAuthGuard from '@/hocs/withUnAuthGuard'

function ProfilePage() {
  return (
    <>
      {/* output: 똑똑한개발자 | login */}
      {/* titleTemplate는 /configs/seo/config.ts에서 변경 가능합니다. */}
      <NextSeo title="profile" />
      <HomeLayout content={<Profile />} />
    </>
  )
}

export default withUnAuthGuard(ProfilePage)

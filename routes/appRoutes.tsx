const appRoutes = {
  home: {
    path: '/',
    asPath: '/',
    iconCss: 'ti-home'
  },
  login: {
    path: '/login',
    asPath: '/login'
  },
  forgotPassword: {
    path: '/forgot-password',
    asPath: '/forgot-password'
  },
  profileTimeline: {
    path: '/profile/timeline',
    asPath: '/profile/timeline'
  },
  profileVideo: {
    path: '/profile/videos',
    asPath: '/profile/videos'
  },
  profileGallery: {
    path: '/profile/gallery',
    asPath: '/profile/gallery'
  },
  signUp: {
    path: '/signup',
    asPath: '/signup'
  },
  termAndCondition: {
    path: '/term-condition',
    asPath: '/term-condition'
  },
  coachBoards: {
    path: '/coach-boards',
    asPath: '/coach-boards'
  },
  athleteBoards: {
    path: '/athlete-boards',
    asPath: '/athlete-boards'
  },
  chat: {
    path: '/chat',
    asPath: '/chat'
  },
  search: {
    path: '/search',
    asPath: '/search'
  },
  otherUserProfileTimeline: {
    path: '/[user_group_id]/[user_profile_id]/[name]/timeline',
    asPath: null
  },
  otherUserProfileGallery: {
    path: '/[user_group_id]/[user_profile_id]/[name]/gallery',
    asPath: null
  },
  otherUserProfileVideo: {
    path: '/[user_group_id]/[user_profile_id]/[name]/video',
    asPath: null
  },
  steps: {
    path: '/steps/account-roles',
    asPath: '/steps/account-roles'
  },
  registerInfo: {
    path: '/steps/account-roles/[user_group_id]/register-info',
    asPath: null
  },
  updateProfile: {
    path: '/profile/update-profile',
    asPath: '/profile/update-profile'
  },
  coachAccountType: {
    path: '/steps/account-types',
    asPath: null
  },
  blockList: {
    path: '/profile/block-list',
    asPath: null
  },
  // CongTyChiNhanh: {
  //   path: '/QuanTriHeThong/ThietLapHeThong/CongTyChiNhanh',
  //   asPath: '/QuanTriHeThong/ThietLapHeThong/CongTyChiNhanh'
  // },
  // PhongBan: {
  //   path: '/QuanTriHeThong/ThietLapHeThong/PhongBan',
  //   asPath: '/QuanTriHeThong/ThietLapHeThong/PhongBan'
  // },
}

export default appRoutes;
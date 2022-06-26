import request from '@/utils/request';
export async function fakeAccountLogin(params) {
  console.log("🚀 ~ file: login.js ~ line 3 ~ fakeAccountLogin ~ params", params)
  return {
    state: 'ok',
    currentAuthority: ['admin'],
    id: 1,
    // currentAuthority: 'user',
  }
}
export async function getFakeCaptcha(mobile) {
  return request(`/api/login/captcha?mobile=${mobile}`);
}

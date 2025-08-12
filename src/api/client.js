import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true, // 백엔드가 httpOnly 쿠키 세션이면 true 유지
  timeout: 10000,
});

// 토큰을 localStorage에 저장하는 경우(쿠키 세션이면 이 블록은 생략 가능)
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("access_token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

api.interceptors.response.use(
  (res) => res,
  (err) => {
    // 401 공통 처리(로그아웃 or 리다이렉트 등)
    if (err?.response?.status === 401) {
      // localStorage.removeItem("access_token");
      // window.location.replace("/login");
    }
    return Promise.reject(err);
  }
);

export default api;

import api from "./client";

// 로그인 (백엔드 엔드포인트에 맞춰 수정)
export const login = async (email, password) => {
  const { data } = await api.post("/onboard/login", { email, password });
  // 쿠키 세션이면 data만 반환. Bearer면 access_token 받아 저장.
  return data; // { access_token?: "...", user?: {...} }
};

// 내 정보
export const getMe = async () => {
  const { data } = await api.get("/mypage/me");
  return data; // { email, nickname, ... }
};

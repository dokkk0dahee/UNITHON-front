import { useCallback, useMemo, useState } from "react";
const KEY = "access_token";

export default function useAuthToken() {
  const [token, setState] = useState(() => localStorage.getItem(KEY) || "");
  const setToken = useCallback((t) => {
    setState(t || "");
    if (t) localStorage.setItem(KEY, t);
    else localStorage.removeItem(KEY);
  }, []);
  const isAuthed = useMemo(() => !!token, [token]);
  return { token, setToken, isAuthed };
}

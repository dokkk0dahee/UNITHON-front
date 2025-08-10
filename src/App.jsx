import { useState } from "react";
import { Home, User, Settings } from "lucide-react";
import './App.css'

export default function App() {
  const [page, setPage] = useState("home");

  const renderPage = () => {
    switch (page) {
      case "home": return <div className="p-4">🏠 홈 화면</div>;
      case "profile": return <div className="p-4">👤 프로필</div>;
      case "settings": return <div className="p-4">⚙️ 설정</div>;
      default: return null;
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* 상단 앱 헤더 */}
      <header className="bg-white shadow p-4 text-center font-bold text-lg">
        My App
      </header>

      {/* 메인 콘텐츠 */}
      <main className="flex-1 overflow-auto">
        {renderPage()}
      </main>

      {/* 하단 네비게이션 */}
      <nav className="bg-white border-t flex justify-around p-2">
        <button onClick={() => setPage("home")} className={`flex flex-col items-center justify-center w-12 h-12 rounded-lg ${page==="home" ? "text-blue-500 bg-blue-50" : "text-gray-500 hover:text-gray-700"}`}>
          <Home size={24} />
        </button>
        <button onClick={() => setPage("profile")} className={`flex flex-col items-center justify-center w-12 h-12 rounded-lg ${page==="profile" ? "text-blue-500 bg-blue-50" : "text-gray-500 hover:text-gray-700"}`}>
          <User size={24} />
        </button>
        <button onClick={() => setPage("settings")} className={`flex flex-col items-center justify-center w-12 h-12 rounded-lg ${page==="settings" ? "text-blue-500 bg-blue-50" : "text-gray-500 hover:text-gray-700"}`}>
          <Settings size={24} />
        </button>
        <button onClick={() => setPage("settings")} className={`flex flex-col items-center justify-center w-12 h-12 rounded-lg ${page==="settings" ? "text-blue-500 bg-blue-50" : "text-gray-500 hover:text-gray-700"}`}>
          <Settings size={24} />
        </button>
        <button onClick={() => setPage("settings")} className={`flex flex-col items-center justify-center w-12 h-12 rounded-lg ${page==="settings" ? "text-blue-500 bg-blue-50" : "text-gray-500 hover:text-gray-700"}`}>
          <Settings size={24} />
        </button>
      </nav>
    </div>
  );
}
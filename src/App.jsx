import { useState } from "react";
import { Home as HomeIcon, Calendar as CalendarIcon, Bot, Users, User, Bell } from "lucide-react";
import './App.css'
import HomePage from './pages/Home/Home.jsx'
import CalendarPage from './pages/Calendar/Calendar.jsx'
import ChatbotPage from './pages/Chatbot/Chatbot.jsx'
import CommunityPage from './pages/Community/Community.jsx'
import Mypage from './pages/Mypage/Mypage.jsx'

export default function App() {
  const [page, setPage] = useState("home");

  const PageHeaderTitle = () => {
    switch (page) {
      case "home": return "My App";
      case "calendar": return "달력";
      case "chatbot": return "상담 챗봇";
      case "community": return "커뮤니티";
      case "mypage": return "마이페이지";
      default: return "My App";
    }
  };

  const renderPage = () => {
    switch (page) {
      case "home": return <HomePage />;
      case "calendar": return <CalendarPage />;
      case "chatbot": return <ChatbotPage />;
      case "community": return <CommunityPage />;
      case "mypage": return <Mypage />;
      default: return null;
    }
  };

  return (
    <div className="app-shell bg-gray-50 relative w-full">
      {/* 상단 앱 헤더 - 고정 */}
      <header className={`fixed top-0 left-0 w-full h-[var(--header-h)] bg-white shadow-sm text-center font-bold text-base sm:text-lg text-gray-800 z-[1000] flex items-center justify-center ${page === "home" ? "hidden" : ""}`}>
        <div className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2">
          <button className="w-7 h-7 sm:w-8 sm:h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 active:bg-gray-300 transition-colors">
            <Bell size={16} className="text-gray-600 sm:w-[18px] sm:h-[18px]" />
          </button>
        </div>
        <span className="block"><PageHeaderTitle /></span>
      </header>


      {/* 메인 콘텐츠 - 고정 높이 계산, 스크롤 가능 */}
      <main className={`app-main-size overflow-y-auto overflow-x-hidden ${page === "home" ? "pt-0" : "pt-[var(--header-h)]"} pb-[var(--nav-h)] px-0 scrollbar-hide w-full`}>
        {renderPage()}
      </main>


      {/* 하단 네비게이션 - 고정, 5개 탭 */}
      <nav className="fixed bottom-0 left-0 w-full h-[var(--nav-h)] bg-white border-t border-gray-200 grid grid-cols-5 items-center safe-area-bottom z-[1000] shadow-lg">
        <button 
          onClick={() => setPage("home")} 
          className={`flex flex-col items-center justify-center h-full rounded-xl transition-all duration-200 ${
            page === "home" 
              ? "text-blue-500 bg-blue-50/60" 
              : "text-gray-500 hover:text-gray-700 hover:bg-gray-50 active:scale-95"
          }`}
        >
          <HomeIcon size={20} className="sm:w-6 sm:h-6" />
          <span className="text-[10px] mt-1 font-medium">홈</span>
        </button>

        <button 
          onClick={() => setPage("calendar")} 
          className={`flex flex-col items-center justify-center h-full rounded-xl transition-all duration-200 ${
            page === "calendar" 
              ? "text-blue-500 bg-blue-50/60" 
              : "text-gray-500 hover:text-gray-700 hover:bg-gray-50 active:scale-95"
          }`}
        >
          <CalendarIcon size={20} className="sm:w-6 sm:h-6" />
          <span className="text-[10px] mt-1 font-medium">달력</span>
        </button>

        <button 
          onClick={() => setPage("chatbot")} 
          className={`flex flex-col items-center justify-center h-full rounded-xl transition-all duration-200 ${
            page === "chatbot" 
              ? "text-blue-500 bg-blue-50/60" 
              : "text-gray-500 hover:text-gray-700 hover:bg-gray-50 active:scale-95"
          }`}
        >
          <Bot size={20} className="sm:w-6 sm:h-6" />
          <span className="text-[10px] mt-1 font-medium">챗봇</span>
        </button>

        <button 
          onClick={() => setPage("community")} 
          className={`flex flex-col items-center justify-center h-full rounded-xl transition-all duration-200 ${
            page === "community" 
              ? "text-blue-500 bg-blue-50/60" 
              : "text-gray-500 hover:text-gray-700 hover:bg-gray-50 active:scale-95"
          }`}
        >
          <Users size={20} className="sm:w-6 sm:h-6" />
          <span className="text-[10px] mt-1 font-medium">커뮤니티</span>
        </button>

        <button 
          onClick={() => setPage("mypage")} 
          className={`flex flex-col items-center justify-center h-full rounded-xl transition-all duration-200 ${
            page === "mypage" 
              ? "text-blue-500 bg-blue-50/60" 
              : "text-gray-500 hover:text-gray-700 hover:bg-gray-50 active:scale-95"
          }`}
        >
          <User size={20} className="sm:w-6 sm:h-6" />
          <span className="text-[10px] mt-1 font-medium">마이페이지</span>
        </button>
      </nav>
    </div>
  );
}
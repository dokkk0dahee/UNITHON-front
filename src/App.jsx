import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import './App.css';

import HomePage from './pages/Home/Home.jsx';
import CalendarPage from './pages/Calendar/Calendar.jsx';
import ChatbotPage from './pages/Chatbot/Chatbot.jsx';
import CommunityPage from './pages/Community/Community.jsx';
import Mypage from './pages/Mypage/Mypage.jsx';

import Attendence from "./pages/Calendar/components/AttendanceList.jsx";
import DayDetail from "./pages/Calendar/components/Scenario.jsx";

// lucide-react에서 아이콘 import
import { Home as HomeIcon, Calendar as ReportIcon, MessageSquare as ChatIcon, Users as CommuIcon, User as MyIcon } from "lucide-react";

function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav className="fixed bottom-0 left-0 w-full h-[var(--nav-h)] bg-white grid grid-cols-5 items-center border-t shadow-lg z-[1000]">
      <button 
        onClick={() => navigate('/')} 
        className={`flex flex-col items-center justify-center h-full rounded-xl transition-all duration-200 ${currentPath === '/' ? "text-blue-500 bg-blue-50/60" : "text-gray-500 hover:text-gray-700 hover:bg-gray-50 active:scale-95"}`}>
        <HomeIcon className="w-6 h-6" />
        <span className="text-[10px] mt-1 font-medium">홈</span>
      </button>

      <button 
        onClick={() => navigate('/calendar')} 
        className={`flex flex-col items-center justify-center h-full rounded-xl transition-all duration-200 ${currentPath === '/calendar' ? "text-blue-500 bg-blue-50/60" : "text-gray-500 hover:text-gray-700 hover:bg-gray-50 active:scale-95"}`}>
        <ReportIcon className="w-6 h-6" />
        <span className="text-[10px] mt-1 font-medium">달력</span>
      </button>

      <button 
        onClick={() => navigate('/chatbot')} 
        className={`flex flex-col items-center justify-center h-full rounded-xl transition-all duration-200 ${currentPath === '/chatbot' ? "text-blue-500 bg-blue-50/60" : "text-gray-500 hover:text-gray-700 hover:bg-gray-50 active:scale-95"}`}>
        <ChatIcon className="w-6 h-6" />
        <span className="text-[10px] mt-1 font-medium">챗봇</span>
      </button>

      <button 
        onClick={() => navigate('/community')} 
        className={`flex flex-col items-center justify-center h-full rounded-xl transition-all duration-200 ${currentPath === '/community' ? "text-blue-500 bg-blue-50/60" : "text-gray-500 hover:text-gray-700 hover:bg-gray-50 active:scale-95"}`}>
        <CommuIcon className="w-6 h-6" />
        <span className="text-[10px] mt-1 font-medium">커뮤니티</span>
      </button>

      <button 
        onClick={() => navigate('/mypage')} 
        className={`flex flex-col items-center justify-center h-full rounded-xl transition-all duration-200 ${currentPath === '/mypage' ? "text-blue-500 bg-blue-50/60" : "text-gray-500 hover:text-gray-700 hover:bg-gray-50 active:scale-95"}`}>
        <MyIcon className="w-6 h-6" />
        <span className="text-[10px] mt-1 font-medium">마이페이지</span>
      </button>
    </nav>
  );
}

function Layout() {
  const location = useLocation();
  const getPageTitle = () => {
    switch(location.pathname) {
      case '/': return "My App";
      case '/calendar': return "달력";
      case '/chatbot': return "상담 챗봇";
      case '/community': return "커뮤니티";
      case '/mypage': return "마이페이지";
      default: return "My App";
    }
  };

  return (
    <div className="app-shell bg-gray-50 relative w-full">
      <main className="app-main-size overflow-y-auto overflow-x-hidden pb-[var(--nav-h)] px-0 scrollbar-hide w-full">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/chatbot" element={<ChatbotPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/attendence" element={<Attendence />} />
          <Route path="/date/:date" element={<DayDetail />} />
        </Routes>
      </main>

      <BottomNav />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

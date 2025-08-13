import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import './App.css';

import HomePage from './pages/Home/Home.jsx';
import CalendarPage from './pages/Calendar/Calendar.jsx';
import ChatbotPage from './pages/Chatbot/Chatbot.jsx';
import CommunityPage from './pages/Community/Community.jsx';
import Mypage from './pages/Mypage/Mypage.jsx';
import SimulationPage from "./pages/Simulation/Simulation.jsx";
import Level4 from "./pages/Simulation/components/Level4.jsx";
import Ep1Page from "./pages/Simulation/components/Ep1Page.jsx";
import Feedback from "./pages/Simulation/components/Feedback.jsx";

import navbar from "./assets/navbar.svg"
import Attendence from "./pages/Calendar/components/AttendanceList.jsx";
import DayDetail from "./pages/Calendar/components/Scenario.jsx";


// lucide-react에서 아이콘 import
import { Home as HomeIcon, Calendar as ReportIcon, MessageSquare as ChatIcon, Users as CommuIcon, User as MyIcon } from "lucide-react";

function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav className="fixed bottom-0 left-0 w-full h-[var(--nav-h)] bg-white items-center border-none shadow-lg z-[1000]">
    {/* 네비게이션 바 이미지 */}
    <img src={navbar} className="w-full" />

    {/* 홈 버튼 */}
    <button
      onClick={() => navigate('/')}
      className="absolute w-[60px] h-[60px] bg-transparent border-none left-[10px] top-1/2 -translate-y-1/2"
    >
    </button>

    {/* 달력 버튼 */}
    <button
      onClick={() => navigate('/calendar')}
      className="absolute  w-[60px] h-[60px] bg-transparent border-none left-[85px] top-1/2 -translate-y-1/2"
    >
    </button>

    {/* 챗봇 버튼 */}
    <button
      onClick={() => navigate('/chatbot')}
      className="absolute w-[60px] h-[60px] bg-transparent border-none left-[165px] top-1/2 -translate-y-1/2"
    >
    </button>

    {/* 커뮤니티 버튼 */}
    <button
      onClick={() => navigate('/community')}
      className="absolute  w-[60px] h-[60px] bg-transparent border-none left-[243px] top-1/2 -translate-y-1/2"
    >
    </button>

    {/* 마이페이지 버튼 */}
    <button
      onClick={() => navigate('/mypage')}
      className="absolute  w-[60px] h-[60px] bg-transparent border-none left-[320px] top-1/2 -translate-y-1/2"
    >
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
          <Route path="/simulation" element={<SimulationPage />} />
          <Route path="/simulation/level4" element={<Level4 />} />
          <Route path="/simulation/level4/ep1" element={<Ep1Page />} />
          <Route path="/feedback" element={<Feedback />} />
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

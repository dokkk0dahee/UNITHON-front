import { useState } from "react";
import { Home, Calendar, Bot, Users, User, Bell } from "lucide-react";
import './App.css'

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
      case "home": 
        return (
          <div className="p-4 animate-fade-in min-h-full">
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm mb-4">
              <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">🏠 홈 화면</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                모바일 전용으로 최적화된 앱입니다. 
                터치 친화적인 인터페이스로 편리하게 사용하세요.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-3 sm:p-4 text-center">
                <div className="text-xl sm:text-2xl mb-2">📱</div>
                <p className="text-xs sm:text-sm text-blue-700 font-medium">모바일 최적화</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-3 sm:p-4 text-center">
                <div className="text-xl sm:text-2xl mb-2">⚡</div>
                <p className="text-xs sm:text-sm text-green-700 font-medium">빠른 성능</p>
              </div>
            </div>
          </div>
        );

      case "calendar":
        return (
          <div className="p-4 animate-fade-in min-h-full">
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm mb-4">
              <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">📅 달력</h2>
              <p className="text-gray-600 text-sm">일정 관리 기능을 준비 중입니다.</p>
            </div>
            <div className="grid grid-cols-responsive gap-3">
              {Array.from({ length: 7 }).map((_, i) => (
                <div key={i} className="bg-white rounded-lg py-6 text-center shadow-sm">
                  <div className="text-gray-500 text-sm">D{ i === 0 ? '-day' : `+${i}` }</div>
                  <div className="mt-2 text-gray-800 font-semibold">일정 없음</div>
                </div>
              ))}
            </div>
          </div>
        );

      case "chatbot":
        return (
          <div className="p-4 animate-fade-in min-h-full">
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm mb-4">
              <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">🤖 상담 챗봇</h2>
              <p className="text-gray-600 text-sm">무엇을 도와드릴까요? 아래 입력창에 질문을 남겨주세요.</p>
            </div>
            <div className="bg-white rounded-xl shadow-sm h-64 p-3 flex flex-col">
              <div className="flex-1 overflow-y-auto scrollbar-hide space-y-2">
                <div className="self-start bg-gray-100 text-gray-700 px-3 py-2 rounded-lg max-w-[80%]">안녕하세요! 상담 챗봇입니다.</div>
                <div className="self-end bg-blue-500 text-white px-3 py-2 rounded-lg max-w-[80%]">문의 내용 예시</div>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <input className="flex-1 border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-100" placeholder="메시지를 입력하세요" />
                <button className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm active:scale-95">전송</button>
              </div>
            </div>
          </div>
        );

      case "community":
        return (
          <div className="p-4 animate-fade-in min-h-full">
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm mb-4">
              <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">👥 커뮤니티</h2>
              <p className="text-gray-600 text-sm">최신 게시글을 확인하세요.</p>
            </div>
            <div className="space-y-3">
              {[1,2,3].map((id) => (
                <div key={id} className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="text-gray-800 font-semibold">커뮤니티 게시글 제목 {id}</div>
                  <div className="mt-1 text-gray-500 text-sm">간단한 내용 미리보기 영역입니다.</div>
                </div>
              ))}
            </div>
          </div>
        );

      case "mypage":
        return (
          <div className="p-4 animate-slide-up min-h-full">
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm mb-4">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white text-xl font-bold">👤</div>
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-gray-800">마이페이지</h2>
                  <p className="text-gray-500 text-xs sm:text-sm">내 정보와 설정을 관리하세요</p>
                </div>
              </div>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600 text-sm sm:text-base">닉네임</span>
                  <span className="font-medium text-sm sm:text-base">사용자</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600 text-sm sm:text-base">이메일</span>
                  <span className="font-medium text-sm sm:text-base">user@mobile.com</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-600 text-sm sm:text-base">알림</span>
                  <span className="font-medium text-sm sm:text-base">켜짐</span>
                </div>
              </div>
            </div>
          </div>
        );

      default: return null;
    }
  };

  return (
    <div className="app-shell bg-gray-50 relative">
      {/* 상단 앱 헤더 - 고정 */}
      <header className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-md h-[var(--header-h)] bg-white shadow-sm text-center font-bold text-base sm:text-lg text-gray-800 z-[1000] border-b border-gray-200 flex items-center justify-center">
        <div className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2">
          <button className="w-7 h-7 sm:w-8 sm:h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 active:bg-gray-300 transition-colors">
            <Bell size={16} className="text-gray-600 sm:w-[18px] sm:h-[18px]" />
          </button>
        </div>
        <span className="block"><PageHeaderTitle /></span>
      </header>

      {/* 메인 콘텐츠 - 고정 높이 계산, 스크롤 가능 */}
      <main className="app-main-size overflow-y-auto overflow-x-hidden pt-[var(--header-h)] pb-[var(--nav-h)] px-0 scrollbar-hide w-full max-w-md mx-auto">
        {renderPage()}
      </main>

      {/* 하단 네비게이션 - 고정, 5개 탭 */}
      <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md h-[var(--nav-h)] bg-white border-t border-gray-200 flex justify-between px-2 items-center safe-area-bottom z-[1000] shadow-lg">
        <button 
          onClick={() => setPage("home")} 
          className={`flex flex-col items-center justify-center w-1/5 h-full rounded-xl transition-all duration-200 ${
            page === "home" 
              ? "text-blue-500 bg-blue-50/60" 
              : "text-gray-500 hover:text-gray-700 hover:bg-gray-50 active:scale-95"
          }`}
        >
          <Home size={20} className="sm:w-6 sm:h-6" />
          <span className="text-[10px] mt-1 font-medium">홈</span>
        </button>

        <button 
          onClick={() => setPage("calendar")} 
          className={`flex flex-col items-center justify-center w-1/5 h-full rounded-xl transition-all duration-200 ${
            page === "calendar" 
              ? "text-blue-500 bg-blue-50/60" 
              : "text-gray-500 hover:text-gray-700 hover:bg-gray-50 active:scale-95"
          }`}
        >
          <Calendar size={20} className="sm:w-6 sm:h-6" />
          <span className="text-[10px] mt-1 font-medium">달력</span>
        </button>

        <button 
          onClick={() => setPage("chatbot")} 
          className={`flex flex-col items-center justify-center w-1/5 h-full rounded-xl transition-all duration-200 ${
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
          className={`flex flex-col items-center justify-center w-1/5 h-full rounded-xl transition-all duration-200 ${
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
          className={`flex flex-col items-center justify-center w-1/5 h-full rounded-xl transition-all duration-200 ${
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
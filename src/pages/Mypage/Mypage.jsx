export default function Mypage() {
    return (
        <div className="px-4 pb-4 animate-slide-up min-h-full">
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
}

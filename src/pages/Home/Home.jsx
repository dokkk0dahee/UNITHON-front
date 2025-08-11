export default function HomePage() {
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
}

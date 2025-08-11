export default function CalendarPage() {
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
}

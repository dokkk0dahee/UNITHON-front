export default function ChatbotPage() {
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
}

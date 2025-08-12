export default function CommunityPage() {
    return (
        <div className="px-4 pb-4 animate-fade-in min-h-full">
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
}

import React, { useRef, useState, useEffect } from 'react';
import episodes from "../../Simulation/components/episode.json"
import { useNavigate } from 'react-router-dom';

const CardCarousel = () => {
    const navigate = useNavigate();
    const scrollContainerRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [page, setPage] = useState(0);
    const episodesToShow = episodes.slice(page * 10, page * 10 + 10);
    

    // 현재 인덱스에 따라 스크롤 위치 계산
    const scrollToIndex = (index) => {
        if (scrollContainerRef.current) {
            const cardWidth = 212; // 카드 너비
            const gap = 20; // gap = 20px
            const cardTotalWidth = cardWidth + gap;
            
            // 첫 번째 카드와 마지막 카드가 중앙에 오도록 조정
            let scrollPosition;
            if (index === 0) {
                // 첫 번째 카드: 중앙 정렬
                scrollPosition = 0;
            } else if (index === episodes.length - 1) {
                // 마지막 카드: 중앙 정렬
                const totalScrollWidth = (episodes.length - 1) * cardTotalWidth;
                scrollPosition = totalScrollWidth;
            } else {
                // 중간 카드들: 정상적인 위치
                scrollPosition = index * cardTotalWidth;
            }
            
            scrollContainerRef.current.scrollLeft = scrollPosition;
        }
    };

    // 터치/마우스 이벤트 핸들러
    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
        setScrollLeft(scrollContainerRef.current.scrollLeft);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        // 드래그가 끝나면 가장 가까운 카드로 스냅
        if (scrollContainerRef.current) {
            const cardWidth = 212;
            const gap = 20;
            const scrollLeft = scrollContainerRef.current.scrollLeft;
            const index = Math.round(scrollLeft / (cardWidth + gap));
            scrollToIndex(index);
        }
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - scrollContainerRef.current.offsetLeft;
        const walk = (x - startX) * 2;
        scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    };

    // 터치 이벤트 핸들러
    const handleTouchStart = (e) => {
        setIsDragging(true);
        setStartX(e.touches[0].pageX - scrollContainerRef.current.offsetLeft);
        setScrollLeft(scrollContainerRef.current.scrollLeft);
    };

    const handleTouchMove = (e) => {
        if (!isDragging) return;
        const x = e.touches[0].pageX - scrollContainerRef.current.offsetLeft;
        const walk = (x - startX) * 2;
        scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleTouchEnd = () => {
        setIsDragging(false);
        // 터치가 끝나면 가장 가까운 카드로 스냅
        if (scrollContainerRef.current) {
            const cardWidth = 212;
            const gap = 20;
            const scrollLeft = scrollContainerRef.current.scrollLeft;
            const index = Math.round(scrollLeft / (cardWidth + gap));
            scrollToIndex(index);
        }
    };

    // 컴포넌트 마운트 시 첫 번째 카드로 스크롤
    useEffect(() => {
        scrollToIndex(0);
    }, []);

    return (
        <div className="w-full mb-6" style={{ fontFamily: 'Pretendardvariable, Pretendard, system-ui, sans-serif' }}>
            <h3 className="text-[20px] text-[#4F72CE] text-left ml-[30px] mt-[0px] mb-[0px]" style={{ fontFamily: 'Pretendardvariable, Pretendard, system-ui, sans-serif', fontWeight: 700 }}>오늘의 시뮬레이션</h3>
            
            {/* 카드 컨테이너 */}
            <div className="relative mt-[16px]">
                <div 
                    ref={scrollContainerRef}
                    className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory"
                    style={{ 
                        scrollBehavior: isDragging ? 'auto' : 'smooth',
                        cursor: isDragging ? 'grabbing' : 'grab',
                        fontFamily: 'Pretendardvariable, Pretendard, system-ui, sans-serif',
                        paddingLeft: 'calc(50% - 120px)', // 화면 중앙에서 카드 시작 (카드 너비보다 조금 작게)
                        paddingRight: 'calc(50% - 120px)', // 화면 중앙에서 카드 끝 (카드 너비보다 조금 작게)
                        gap: '20px' // 카드 간격을 더 줄임
                    }}
                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    {episodesToShow.map((episode, index) => (
                        <div 
                            key={episode.id}
                            className="flex-shrink-0 w-[212px] h-[308px] bg-[#FFFFFF] rounded-[25px] p-[15px] flex flex-col justify-between snap-center"
                            style={{
                                border: '1px solid var(--Background-deep, #FC8FB9)',
                                boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.10)',
                                fontFamily: 'Pretendardvariable, Pretendard, system-ui, sans-serif',
                                marginRight: index < episodesToShow.length - 1 ? '20px' : '0' // 마지막 카드가 아닌 경우 오른쪽 마진 추가
                            }}
                        >
                            <div className="flex-1 text-center">
                                <h4 className="text-[20px] mt-[0px] mb-[0px] leading-[140%] tracking-[0] text-[#000000]" style={{ fontFamily: 'Pretendardvariable, Pretendard, system-ui, sans-serif', fontWeight: 600 }}>
                                    {episode.title}
                                </h4>
                                <p className="mx-auto w-[190px] text-[12px] mt-[70px] mb-[0px] leading-[200%] tracking-[0] text-[#2F4159]" style={{ fontFamily: 'Pretendardvariable, Pretendard, system-ui, sans-serif', fontWeight: 500 }}>
                                    {episode.description}
                                </p>
                                <p className="text-[14px] mt-[60px] mb-[0px] leading-[200%] tracking-[0] text-[#2F4159]" style={{ fontFamily: 'Pretendardvariable, Pretendard, system-ui, sans-serif', fontWeight: 500 }}>
                                    {episode.question}
                                </p>

                            </div>
                            <button 
                                className="w-[182px] h-[28px] px-[15px] py-[10px] 
                                            bg-[#849BEA] text-[#F7F7F8] text-[16px] 
                                            rounded-[15px] flex items-center justify-center mx-auto
                                            transition-all duration-300 ease-out
                                            transform hover:scale-[1.02] active:scale-95 active:translate-y-[1px]
                                            border-0 focus:outline-none shadow-sm"
                                style={{ fontFamily: 'Pretendardvariable, Pretendard, system-ui, sans-serif', fontWeight: 600 }}
                                onClick={() => navigate(`/simulation/${episode.id}`)}
                            >
                            시작하기
                            </button>
                        </div>
                    ))}
                </div>  
            </div>
        </div>
    );
};

export default CardCarousel;

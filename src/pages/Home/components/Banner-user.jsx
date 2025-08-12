import React from 'react';

export default function BannerUser() {
    return (
        <div className="w-full rounded-b-[25px] shadow-2xl pb-[40px]"
        style={{
            background: "var(--Background-bright, linear-gradient(180deg, #F8D1E0 0%, #ACD0FD 100%))",
            boxShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.10)"
        }}>
            {/* 첫 번째 영역 */}
            <div className="ml-[30px] w-[200px] h-[80px] text-left">
                <h3 className="text-[28px] font-bold pt-[80px] mb-[0px]">정아님,</h3>
                <h5 className="text-[20px] font-semibold mt-[0px] mb-[0px]">
                    오늘은 출석 1일차예요!
                </h5>
            </div>

            {/* 두 번째 영역 */}
            <div className="mx-auto bg-[#ffffff]/60 ml-[15px] mt-[90px] w-[320px] text-left rounded-[16px] shadow-2xl pl-[20px] pr-[20px] pt-[15px] pb-[15px]">
                <p className="text-[16px] font-bold mt-[0px] mb-[0px]">오늘의 연애 Tip</p>
                <p className="text-[14px] font-semibold mt-[0px] mb-[0px]">
                    좋아하는 상대에게 플레이리스트를 공유해보세요!
                </p>
            </div>
        </div>
    );
}

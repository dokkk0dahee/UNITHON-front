import React from 'react';

export default function LoveTest() {
    return (
        <div
            className="relative overflow-hidden w-[297px] h-[114px] px-[15px] py-[18px] rounded-b-[16px] shadow-2xl flex flex-col"
            style={{ backgroundImage: `url(${loveTestImg})` }}>
            <h4
                className="text-[16px] text-left mt-[2px] mb-[0px] leading-[175%] tracking-normal"
                style={{
                fontFamily: "Pretendardvariable, Pretendard, system-ui, sans-serif",
                fontWeight: 600,
                }}>
                나는 어떤 타입의 모솔일까?
            </h4>
            <p
                className="text-[14px] text-left mt-[2px] mb-[0px] leading-[175%] tracking-normal"
                style={{
                fontFamily: "Pretendardvariable, Pretendard, system-ui, sans-serif",
                fontWeight: 500,
                }}>
                "모태솔로지만 연애는 하고 싶어
            </p>
            <button
                onClick={() =>
                window.open("https://test-it.co.kr/test305.html", "_blank", "noopener,noreferrer")
                }
                className="w-[120px] h-[24px] px-[10px] mt-[10px] mb-[0px] bg-[#F3F8FF] active:bg-[#BFBFBF] rounded-[16px] border-0 text-[12px] text-left flex items-center"
                style={{
                fontFamily: "Pretendardvariable, Pretendard, system-ui, sans-serif",
                fontWeight: 600,
                }}>
                연애 테스트 하러가기
            </button>
            <div className="w-[40px] h-[22px] bg-[#3C3D46]/30 rounded-[16px] flex items-center justify-center px-[6px] self-end mt-[-8px]">
                <p className="text-[10px] leading-[350%] tracking-normal text-white font-semibold m-0">
                &lt; 1/5 &gt;
                </p>
            </div>
            </div>

    );
}

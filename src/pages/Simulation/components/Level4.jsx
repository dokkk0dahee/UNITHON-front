import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import arrow from '../../../assets/icons/arrow.svg';
import park from '../../../assets/park.png';

export default function Level4() {
    const navigate = useNavigate();

    return (
        <div>
            <button
                onClick={() => navigate(-1)}
                className="fixed top-[40px] left-[10px] w-10 h-10 flex items-center justify-center bg-transparent p-0 m-0 border-none shadow-none transition"
                aria-label="뒤로가기"
                type="button">
                <img src={arrow} alt="뒤로가기" className="w-6 h-6 select-none" />
            </button>

            <div className='text-left ml-[40px]'>
                <h3 className="text-[28px] text-left mt-[120px] mb-[0px] text-[#4F72CE] leading-[140%]"
                    style={{
                        background: "linear-gradient(270deg, #FC8FB9 70%, #7BC4FD 100%)",
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                        lineHeight: '30px',
                        color: "transparent",
                        WebkitTextFillColor: "transparent",
                        fontFamily: 'Pretendardvariable, Pretendard, system-ui, sans-serif', fontWeight: 700,
                    }}>
                    Level 4
                </h3>
                <p className='mt-[0px] mb-[0px] text-[#8B8B8B] text-[12px] mt-[5px]'>
                    가까워진 만큼, 설레는 거리, 오늘은 한 걸음 더 좁혀보세요.
                </p>
            </div>

            {/* 카드 컨테이너 */}
            <div className="relative mt-[80px] mx-auto flex flex-col items-center">
                <div className="flex-shrink-0 w-[212px] h-[308px] bg-[#FFFFFF] rounded-[25px] p-[25px] flex flex-col justify-between snap-center"
                    style={{
                        background:'linear-gradient(154deg, rgba(248, 209, 224, 0.25) 3.94%, rgba(172, 208, 253, 0.25) 97.26%)',
                        border: '1px solid var(--Background-deep, #FC8FB9)',
                        boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.10)',
                        fontFamily: 'Pretendardvariable, Pretendard, system-ui, sans-serif',
                    }}>
                    <div className="flex-1 text-center mx-auto">
                        <h4 className="text-[20px] mt-[0px] mb-[0px] leading-[140%] tracking-[0] text-[#4F72CE]" style={{ fontFamily: 'Pretendardvariable, Pretendard, system-ui, sans-serif', fontWeight: 700 }}>
                            ep1. 놀이공원
                        </h4>
                        <img src={park} alt='park' className='w-[100px] h-[100px] mt-[20px]'/>
                        <p className="mx-auto text-[12px] mt-[15px] mb-[0px] leading-[200%] tracking-[0] text-[#2F4159]" style={{ fontFamily: 'Pretendardvariable, Pretendard, system-ui, sans-serif', fontWeight: 500 }}>
                            놀이공원 불빛이 반짝이고, <br/>관람차 꼭대기에 도착했다.<br/>아래로 떨어진 야경 속에서 잠간의 <br/> 침묵이 흐른다.
                        </p>
                        <p className="text-[14px] mt-[20px] mb-[0px] leading-[200%] tracking-[0] text-[#2F4159]" style={{ fontFamily: 'Pretendardvariable, Pretendard, system-ui, sans-serif', fontWeight: 500 }}>
                            여기서 당신이 할 말은?
                        </p>
                    </div>
                </div>
                <button 
                        className="w-[296px] h-[28px] px-[15px] py-[10px] mt-[30px] 
                            bg-[#849BEA] text-[#F7F7F8] text-[16px] 
                            rounded-[15px] flex items-center justify-center mx-auto
                            transition-all duration-300 ease-out
                            transform hover:scale-[1.02] active:scale-95 active:translate-y-[1px]
                            border-0 focus:outline-none shadow-sm"
                        tyle={{ fontFamily: 'Pretendardvariable, Pretendard, system-ui, sans-serif', fontWeight: 600 }}
                            onClick={() => navigate('/simulation/level4/ep1')}>
                            시작하기
                    </button> 
            </div>  
        </div>

    );
}

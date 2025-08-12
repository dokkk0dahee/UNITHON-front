import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import arrow from '../../assets/icons/arrow.svg';
import overview from '../../assets/icons/overview.svg'

export default function SimulationPage() {
    const { id } = useParams();
    const navigate = useNavigate();

    return (
        <div className="p-6">
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
                    아무개님의<br/>시뮬레이션 현황
                </h3>
                <p className='mt-[0px] mb-[0px] text-[#8B8B8B] text-[12px] mt-[5px]'>시나리오: 31/50</p>
            </div>
            <div className="mt-[40px]" style={{ position: 'relative', display: 'inline-block' }}>
                <img src={overview} alt="시뮬레이션" calssName="w-[300px] h-[300px] mx-auto" />
                
                <button
                    style={{
                    position: 'absolute',
                    top: '285px',      // 이미지 위에서 10px 아래 위치
                    left: '25px',    // 이미지 오른쪽에서 10px 왼쪽 위치
                    padding: '8px 12px',
                    opacity: '0',
                    border: 'none',
                    cursor: 'pointer',
                    width: '105px',
                    height: '105px',
                    }}
                    onClick={() =>navigate('/simulation/level4')}
                />
            </div>
        </div>
    );
}

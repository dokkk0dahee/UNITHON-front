import Attendence from "./components/AttendanceList";

export default function CalendarPage() {
    return (
        <div className="px-4 pb-4 animate-fade-in min-h-full">
            <h3 className="text-[28px] font-bold pt-[90px] mb-[0px] text-left ml-[24px] mt-[0px]">머시개의 활동 현황</h3>
            
            <div className="mx-auto w-[173px] h-[71px] mt-[16px] px-[58px] py-[12px] rounded-[16px] bg-[#FFFFFF] flex items-center justify-center"
                style={{boxShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.05)"}}>
                {/* 왼쪽 */}
                <div className="flex flex-col items-center flex-1 mr-[25px]">
                    <span className="text-[32px] text-[#4F72CE]"
                        style={{ fontFamily: 'Pretendardvariable, Pretendard, system-ui, sans-serif', fontWeight: 600 }}>10</span>
                    <span className="text-[14px] text-[#3C3D46]"
                    style={{ fontFamily: 'Pretendardvariable, Pretendard, system-ui, sans-serif', fontWeight: 500 }}>연속 일</span>
                </div>
                {/* 구분선 */}
                <div className="w-[1px] h-[32px] bg-[#849BEA]/50"></div>
                {/* 오른쪽 */}
                <div className="flex flex-col items-center flex-1 ml-[25px]">
                    <span className="text-[32px] text-[#4F72CE]"
                    style={{ fontFamily: 'Pretendardvariable, Pretendard, system-ui, sans-serif', fontWeight: 600 }}>1</span>
                    <span className="text-[14px] text-[#3C3D46]"
                    style={{ fontFamily: 'Pretendardvariable, Pretendard, system-ui, sans-serif', fontWeight: 500 }}>연속 주</span>
                </div>
            </div>
            <hr className="w-[343px] border-[#D8E3FF] my-[44px]" />

            <Attendence />
        </div>
    );
}

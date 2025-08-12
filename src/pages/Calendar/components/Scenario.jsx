import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import arrow from '../../../assets/icons/arrow.svg';

function DayDetail() {
    const navigate = useNavigate();
    const { date } = useParams();
    

    // 날짜 포맷팅
    const formattedDate = date
    ? (() => {
        const d = new Date(date);
        d.setDate(d.getDate() + 1);  // 날짜 +1
        return d.toLocaleDateString('ko-KR', {
            month: "long",
            day: "numeric",
        });
        })()
    : "";
        const [activeTab, setActiveTab] = useState("scenario"); // "scenario" 또는 "chatbot"
    
        // 시나리오 내용 (예시)
    const scenarioContent = date ? (
        <div className="text-left">
        <p className="text-[18px] mb-[5px] mt-[0px]"
            style={{
                background: "linear-gradient(270deg, #FC8FB9 70%, #7BC4FD 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                WebkitTextFillColor: "transparent",
                fontFamily: 'Pretendardvariable, Pretendard, system-ui, sans-serif', fontWeight: 600,
            }}>핵심 포인트 요약</p>
        {/* 여기에 데이터 넣으면 됨 */}
        <p className="text-[13px] mt-[0px] text-[#18181C] leading-5 list-disc list-inside"
            style={{
                lineHeight: '22px',
                letterSpacing: '-0.25px',
                fontFamily: 'Pretendardvariable, Pretendard, system-ui, sans-serif', fontWeight: 500,
            }}>
            유저 발화 특징 <br/>
            : 풍경 감상을 먼저 언급 → '함께 있음'을 가지 있게 표현 <br/>
            → 부담 없는 친밀감 전달 <br/>
            - 장점: 분위기 활용, 호감 표현, 담백함 유지 <br/>
            - 단점: 전형적인 멘트 느낌, 후속 질문 부재로 대화 지속성 약함 <br/>
            - 개선 방향: 개인적인 디테일 추가 + 대화를 이어갈 질문 포함<br/>
        </p>
        <p className="text-[18px] mb-[0px] mt-[40px]"
            style={{
                background: "linear-gradient(270deg, #FC8FB9 70%, #7BC4FD 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                WebkitTextFillColor: "transparent",
                fontFamily: 'Pretendardvariable, Pretendard, system-ui, sans-serif', fontWeight: 600,
            }}>추천 멘트 예시</p>
        {/* 여기에 데이터 넣으면 됨 */}
        <p className="text-[13px] mt-[5px] text-[#18181C] leading-5 list-disc list-inside"
            style={{
                lineHeight: '22px',
                letterSpacing: '-0.25px',
                fontFamily: 'Pretendardvariable, Pretendard, system-ui, sans-serif', fontWeight: 500,
            }}>
            - 감정 심화형: "야경이 진짜 예쁘네. 오늘 너랑 같이 와서 더 좋은 것 같아.
            너랑 있으면 풍경이 다 다르게 보인다." <br/>
            -대화 확장형: "야경이 진짜 예쁘네. 오늘 너랑 같이 와서 더 좋은 것 같아.
            너는 이런 데 오는 거 좋아해?" <br/>
        </p>
        </div>
    ) : (
        <p className="text-[13px] mt-[5px] text-[#18181C] leading-5 list-disc list-inside"
            style={{
                lineHeight: '22px',
                letterSpacing: '-0.25px',
                fontFamily: 'Pretendardvariable, Pretendard, system-ui, sans-serif', fontWeight: 500,
            }}>데이터가 없습니다! 
        </p>
    );

    // 챗봇 내용 (예시)
    const chatbotContent = date ? (
        <div className="text-left">
        <p className="text-[18px] mb-[5px] mt-[0px]"
            style={{
                background: "linear-gradient(270deg, #FC8FB9 70%, #7BC4FD 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                WebkitTextFillColor: "transparent",
                fontFamily: 'Pretendardvariable, Pretendard, system-ui, sans-serif', fontWeight: 600,
            }}>대화 내용 요약</p>
        {/* 여기에 데이터 넣으면 됨 */}
        <p className="text-[13px] mt-[0px] text-[#18181C] leading-5 list-disc list-inside"
            style={{
                lineHeight: '22px',
                letterSpacing: '-0.25px',
                fontFamily: 'Pretendardvariable, Pretendard, system-ui, sans-serif', fontWeight: 500,
            }}>
            - 상대방이 은근히 호감을 암시하는 듯한 발언을 함 (“내가 너 때문에 집중 안 될 수도 있지 않나?”) <br/>
            : 풍경 감상을 먼저 언급 → '함께 있음'을 가지 있게 표현 <br/>
            → 부담 없는 친밀감 전달 <br/>
            - 그러나 바로 농담처럼 넘겨 구체적인 감정을 확인하기 어려움 <br/>
            - 전체 대화에서 장난과 애매한 표현이 섞여 있어 썸인지 판단하기 애매한 상황 <br/>
        </p>

        <p className="text-[18px] mb-[0px] mt-[40px]"
            style={{
                background: "linear-gradient(270deg, #FC8FB9 70%, #7BC4FD 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                WebkitTextFillColor: "transparent",
                fontFamily: 'Pretendardvariable, Pretendard, system-ui, sans-serif', fontWeight: 600,
            }}>피드백</p>
        {/* 여기에 데이터 넣으면 됨 */}
        <p className="text-[13px] mt-[5px] text-[#18181C] leading-5 list-disc list-inside"
            style={{
                lineHeight: '22px',
                letterSpacing: '-0.25px',
                fontFamily: 'Pretendardvariable, Pretendard, system-ui, sans-serif', fontWeight: 500,
            }}>
            - 호감 신호 가능성: 상대가 굳이 필요 없는 말을 농담 섞어 한 점, 그리고 이모지(😉)를 사용한 점은 친밀감과 장난스러운 호감을 나타낼 수 있음. <br/>
            - 주의점: 하지만 대화 전체를 농담으로 흐려버렸기 때문에, 상대의 진심을 바로 단정하긴 어려움.<br/>
            - 추천 행동: 다음 대화에서 비슷한 맥락의 장난을 가볍게 받아치고, 조금 더 직접적인 질문(“진짜 이유 뭐야?” 또는 “그럼 다음엔 내가 집중 안 되게 해줄까?”)으로 반응을 확인해보기. <br/>
        </p>
        </div>
    ) : (
        <p className="text-[13px] mt-[5px] text-[#18181C] leading-5 list-disc list-inside"
        style={{
            lineHeight: '22px',
            letterSpacing: '-0.25px',
            fontFamily: 'Pretendardvariable, Pretendard, system-ui, sans-serif', fontWeight: 500,
        }}>데이터가 없습니다! </p>
        );

    return (
        <div>
        <button
            onClick={() => navigate(-1)}
            className="fixed top-[40px] left-[10px] w-10 h-10 flex items-center justify-center bg-transparent p-0 m-0 border-none shadow-none transition"
            aria-label="뒤로가기"
            type="button"
        >
            <img src={arrow} alt="뒤로가기" className="w-6 h-6 select-none" />
        </button>

        <h3 className="text-[20px] text-left mt-[107px] ml-[40px] text-[#4F72CE] leading-[140%]"
            style={{ fontFamily: 'Pretendardvariable, Pretendard, system-ui, sans-serif', fontWeight: 700 }}>
            {formattedDate}의 기록
        </h3>

            {/* 탭 버튼 */}
        <div className="flex mx-auto border-[none] rounded-[5px] bg-[#CFD2D7] w-[327px] h-[46px] mb-[25px]">
            <button
            onClick={() => setActiveTab("scenario")}
            style={{ fontFamily: 'Pretendardvariable, Pretendard, system-ui, sans-serif', fontWeight: 500 }}
            className={`flex-1 border-none rounded-[5px] text-center transition ${
                activeTab === "scenario"
                ? "bg-[#FFFFFF] text-[14px] w-full h-[28px] ml-[1px] mt-[1px]"
                : "text-[#999999]"
            }`}>
            시나리오
            </button>

            <button
            onClick={() => setActiveTab("chatbot")}
            style={{ fontFamily: 'Pretendardvariable, Pretendard, system-ui, sans-serif', fontWeight: 500 }}
            className={`flex-1 border-none rounded-[5px] text-center transition ${
                activeTab === "chatbot"
                ? "bg-[#FFFFFF] text-[14px] w-full h-[28px] mr-[1px] mt-[1px]"
                : "text-[#999999]"
            }`}>
            챗봇
            </button>
        </div>

        {/* 내용 영역 */}
        <div className="mx-auto w-[327px] border-none rounded-[16px] p-[16px] bg-[#FFFFFF]"
            style={{ boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.05)'}}>
            {activeTab === "scenario" ? scenarioContent : chatbotContent}
        </div>

        </div>
    );
}

export default DayDetail;

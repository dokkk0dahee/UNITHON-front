import { useNavigate } from "react-router-dom";
import arrow from '../../../assets/icons/arrow.svg';

function Feedback() {
    const navigate = useNavigate();
    
        // 시나리오 내용 (예시)
    const FeedbackContent =  (
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
            - 상대방이 은근히 호감을 암시하는 듯한 발언을 했어.<br/>
            - 그러나 바로 농담처럼 넘겨 구체적인 감정을 확인하기 어려워.<br/>
            - 전체 대화에서 장난과 애매한 표현이 섞여 있어 썸인지 <br/>판단하기 애매한 상황이야.<br/>
        </p>

        <p className="text-[18px] mb-[0px] mt-[40px]"
            style={{
                background: "linear-gradient(270deg, #FC8FB9 70%, #7BC4FD 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                WebkitTextFillColor: "transparent",
                fontFamily: 'Pretendardvariable, Pretendard, system-ui, sans-serif', fontWeight: 600,
            }}>대화 흐름 Tip</p>
        {/* 여기에 데이터 넣으면 됨 */}
        <p className="text-[13px] mt-[5px] text-[#18181C] leading-5 list-disc list-inside"
            style={{
                lineHeight: '22px',
                letterSpacing: '-0.25px',
                fontFamily: 'Pretendardvariable, Pretendard, system-ui, sans-serif', fontWeight: 500,
            }}>
            처음에 이렇게 말했다면,  <br/>
            '너랑 있으니 더 특별해.'라는 말을 덧붙여서 상대방의 반응을 <br />
            유도할 수 있었을 거야. 상대방의 감정을 더 잘 이끌어낼 <br/> 수 있도록 칭찬이나 긍정적인 피드백을 주는 것도 좋겠다.<br/>
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
            - 호감 신호 가능성: 상대가 굳이 필요 없는 말을 농담 섞어 한 점, 그리고 이모지(😉)를 사용한 점은 친밀감과 장난스러운  호감을 나타낼 수 있어. <br/>
            - 주의점: 하지만 대화 전체를 농담으로 흐려버렸기 때문에, 상대의 진심을 바로 단정하긴 어려워. <br/>
            - 추천 행동: 다음 대화에서 비슷한 맥락의 장난을 가볍게 받아치고, 조금 더 직접적인 질문으로 반응을 확인해보기. <br/>
        </p>
        </div>
        
    ) 

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
                Ep 1. 놀이공원
            </h3>
    
            {/* 내용 영역 */}
            <div className="mx-auto w-[327px] border-none rounded-[16px] p-[16px] bg-[#FFFFFF]"
                style={{ boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.05)' }}>
                {FeedbackContent}
            </div>
        </div>
    );
}

export default Feedback;
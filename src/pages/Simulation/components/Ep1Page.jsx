import React, { useState, useRef, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import arrow from '../../../assets/icons/arrow.svg'; // 뒤로가기 아이콘
import chatting from '../../../assets/icons/chatting.svg';
import backgroundImg from '../../../assets/background.png'; // 흐릿한 배경 이미지 (대체하세요)

const storyData = [
    {
        id: 1,
        narration: "놀이공원 불빛이 반짝이고, 관람차 꼭대기에 도착했다.",
    },
    {
        id: 2,
        narration: "아래로 펼쳐진 야경 속에서 잠깐의 침묵이 흐른다. ",
    },
    {
        id: 3,
        situation: `놀이공원 불빛이 반짝이고, 관람차 꼭대기에 도착했다.
    아래로 펼쳐진 야경 속에서 잠깐의 침묵이 흐른다`,
        question: "여기서 당신이 할 말은?",
    },
    ];

    export default function Ep1Page() {
        const [step, setStep] = useState(0);
        const [inputValue, setInputValue] = useState("");
        const [submittedAnswers, setSubmittedAnswers] = useState({});
        const [showFeedback, setShowFeedback] = useState(false); // 피드백 모달 노출 상태
        const textareaRef = useRef(null);
        const navigate = useNavigate();
    
        const currentData = storyData[step];
        const isOnlyNarration =
            (currentData.situation === undefined || currentData.situation === "") &&
            (currentData.question === undefined || currentData.question === "") &&
            !!currentData.narration;
        const isLastStep = step === storyData.length - 1;
    
        const handleNext = () => {
            if ((currentData.situation || currentData.question) && inputValue.trim() === "") {
                alert("말을 입력해 주세요.");
                return;
            }
    
            if (inputValue.trim() !== "") {
                setSubmittedAnswers({
                    ...submittedAnswers,
                    [currentData.id]: inputValue.trim(),
                });
                setInputValue("");
            }
    
            if (step + 1 < storyData.length) {
                setStep(step + 1);
            }
        };
    
        // 화면 클릭 이벤트
        const handleScreenClick = () => {
            if (showFeedback) return;
            
            if (!isLastStep) {
                if (isOnlyNarration) {
                setStep(step + 1);
                }
            } else {
              // 마지막 스텝에서는 어떤 경우든 클릭 시 피드백 모달 띄움
                setShowFeedback(true);
            }
        };
    
        useEffect(() => {
            if (textareaRef.current) {
                textareaRef.current.style.height = "auto";
                textareaRef.current.style.height = textareaRef.current.scrollHeight + "px";
            }
        }, [inputValue]);
    
        // 피드백 버튼 클릭시 (예: 페이지 이동)
        const handleFeedbackClick = () => {
            // 예: 다른 페이지로 이동
            navigate("/feedback");
        };
    

    return (
        <div
        onClick={handleScreenClick}
        style={{
            backgroundImage: `url(${backgroundImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
            color: "#fff",
            display: "flex",
            flexDirection: "column",
            padding: "16px",
            position: "relative",
            fontFamily: 'Pretendardvariable, Pretendard, system-ui, sans-serif',
            userSelect: "none",
            cursor: isOnlyNarration ? "pointer" : "default",
        }}
        >
        {/* 뒤로가기 버튼 */}
        <button
            onClick={(e) => {
            e.stopPropagation(); // 이벤트 버블링 방지
            navigate(-1);
            }}
            className="fixed top-[40px] left-[10px] w-10 h-10 flex items-center justify-center bg-transparent p-0 m-0 border-none shadow-none transition"
            aria-label="뒤로가기"
            type="button"
        >
            <img src={arrow} alt="뒤로가기" className="w-6 h-6 select-none" />
        </button>

        {/* 질문 박스 (질문 있을 때만) */}
        {currentData.question && (
            <div
            style={{
                backgroundColor: "rgba(255,255,255,0.15)",
                borderRadius: "20px",
                padding: "20px 20px",
                maxWidth: "90%",
                marginTop: "150px",
                fontSize: "14px",
                color: "#e0e0e0",
            }}
            >
            <strong>Q. {currentData.question}</strong>
            </div>
        )}

        {/* 상황 및 설명 박스 */}
        {(currentData.situation || currentData.narration) && (
            <div
            className="text-left"
            style={{
                backgroundColor: "rgba(0,0,0,0.7)",
                borderRadius: "12px",
                padding: "20px",
                maxWidth: "90%",
                marginTop: isOnlyNarration ? "180px" : "50px",
                lineHeight: "1.5",
                boxShadow: "0 0 10px rgba(255,255,255,0.2)",
                fontSize: "14px",
            }}
            >
            {currentData.situation && <strong>상황</strong>}
            {currentData.situation && <p style={{ marginTop: "8px" }}>{currentData.situation}</p>}
            {currentData.narration && <p>{currentData.narration}</p>}
            </div>
        )}

        {/* 제출된 답변 자막 출력 */}
        {submittedAnswers[currentData.id] && (
        <div>
            <div
                style={{
                position: "fixed",
                bottom: "280px",
                right: "20px",          // 오른쪽으로 붙이기 (원하는 간격으로 조절)
                backgroundColor: "rgba(163, 170, 224, 0.63)",
                color: "#000",
                padding: "12px 24px",
                borderRadius: "20px",
                maxWidth: "65%",
                fontSize: "16px",
                textAlign: "center",
                boxShadow: "0 0 15px rgba(0,0,0,0.7)",
                userSelect: "text",
                }}>
                {submittedAnswers[currentData.id]}
            </div>
            {/* 여기를 바꾸면 돼요 */}
            <div
                style={{
                position: "fixed",
                bottom: "180px",
                left: "20px",          // 오른쪽으로 붙이기 (원하는 간격으로 조절)
                backgroundColor: "rgba(230, 181, 181, 0.63)",
                color: "#000",
                padding: "12px 24px",
                borderRadius: "20px",
                maxWidth: "65%",
                fontSize: "16px",
                textAlign: "center",
                boxShadow: "0 0 15px rgba(0,0,0,0.7)",
                userSelect: "text",
                }}>
                그럼 다음에도 야경 볼 땐 무조건 나랑 와야겠네?
            </div>
        </div>
        )}
        


        {/* 입력창과 전송 버튼 (질문 있을 때만, 제출 후 인풋은 숨김) */}
        {currentData.question && !submittedAnswers[currentData.id] && (
            <div
            style={{
                position: "fixed",
                bottom: "380px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "90%",
                maxWidth: "400px",
                display: "flex",
                alignItems: "center",
                backgroundColor: "rgba(0,0,0,0.6)",
                borderRadius: "15px",
                padding: "5px 10px",
                boxShadow: "0 0 10px rgba(0,0,0,0.2)",
            }}
            onClick={(e) => e.stopPropagation()} // 입력창 클릭 시 이벤트 버블링 막기
            >
            <textarea
                type="text"
                ref={textareaRef}
                placeholder="여기에 입력하세요"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                style={{
                flexGrow: 1,
                background: "transparent",
                border: "none",
                outline: "none",
                color: "#ffffff",
                fontSize: "14px",
                fontFamily: 'Pretendardvariable, Pretendard, system-ui, sans-serif',
                }}
                onKeyDown={(e) => {
                if (e.key === "Enter") {
                    e.preventDefault(); // 엔터 줄바꿈 방지
                    handleNext();
                }
                }}
            />
            <button
                onClick={handleNext}
                className="cursor-pointer bg-transparent border-none p-0"
                aria-label="전송"
            >
                <img src={chatting} alt="채팅 아이콘" className="w-6 h-6" />
            </button>
            </div>
        )}

        {/* === 피드백 모달 === */}
        {showFeedback && (
                <div
                    style={{
                        position: "fixed",
                        top: 0, left: 0, right: 0, bottom: 0,
                        backgroundColor: "rgba(0,0,0,0.7)",
                        backdropFilter: "blur(5px)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        zIndex: 9999,
                        userSelect: "none",
                    }}
                    onClick={() => setShowFeedback(false)} // 배경 클릭하면 모달 닫힘
                >
                    <button
                        onClick={(e) => {
                            e.stopPropagation(); // 버튼 클릭 시 배경 클릭 이벤트 막기
                            handleFeedbackClick();
                        }}
                        style={{
                            padding: "10px",
                            width:"307px",
                            height: "28px",
                            fontSize: "14px",
                            borderRadius: "12px",
                            border: "none",
                            cursor: "pointer",
                            backgroundColor: "#849BEA ",
                            color: "#fff",
                            bottom: "80px",
                            marginTop: "500px",
                            boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
                            userSelect: "none",
                        }}
                    >
                        피드백 보러가기
                    </button>
                </div>
            )}
        </div>
    );
}

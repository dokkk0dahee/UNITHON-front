import React, { useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import arrow from '../../../assets/icons/arrow.svg'; // 뒤로가기 아이콘
import backgroundImg from '../../../assets/background.png'; // 흐릿한 배경 이미지 (대체하세요)

const storyData = [
    {
        id: 1,
        narration: "놀이공원 불빛이 반짝이고, 관람차 꼭대기에 도착했다.",
    },
    {
        id: 2 ,
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
    const [answers, setAnswers] = useState({});
    const navigate = useNavigate();

    const currentData = storyData[step];

    // 상황과 질문이 없고 narration만 있을 때
    const isOnlyNarration = !currentData.situation && !currentData.question && currentData.narration;

    const handleNext = () => {
        // 상황과 질문이 있을 때는 입력값 필수
        if ((currentData.situation || currentData.question) && inputValue.trim() === "") {
            alert("말을 입력해 주세요.");
            return;
        }

        if (inputValue.trim() !== "") {
            setAnswers({ ...answers, [currentData.id]: inputValue });
            setInputValue("");
        }

        if (step + 1 < storyData.length) {
            setStep(step + 1);
        } else {
            alert("스토리가 끝났어요!");
            // 필요 시 다른 페이지로 이동 가능
        }
    };

    // narration만 있는 화면 클릭 시 다음으로
    const handleScreenClick = () => {
        if (isOnlyNarration) {
            if (step + 1 < storyData.length) {
                setStep(step + 1);
            } else {
                alert("스토리가 끝났어요!");
            }
        }
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
                    e.stopPropagation(); // 클릭 이벤트 버블링 막기
                    navigate(-1);
                }}
                className="fixed top-[40px] left-[10px] w-10 h-10 flex items-center justify-center bg-transparent p-0 m-0 border-none shadow-none transition"
                aria-label="뒤로가기"
                type="button"
            >
                <img src={arrow} alt="뒤로가기" className="w-6 h-6 select-none" />
            </button>
            
            {/* 질문 박스 (질문이 있을 때만) */}
            {currentData.question && (
                <div
                    style={{
                        backgroundColor: "rgba(255,255,255,0.15)",
                        borderRadius: "20px",
                        padding: "20px 20px",
                        maxWidth: "90%",
                        marginTop: "120px",
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
                    style={{
                        backgroundColor: "rgba(0,0,0,0.7)",
                        borderRadius: "12px",
                        padding: "20px",
                        maxWidth: "90%",
                        marginTop: "80px",
                        marginBottom: "20px",
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

            
            {/* 입력창과 전송 버튼 (질문이 있을 때만) */}
            {currentData.question && (
                <div
                    style={{
                        position: "fixed",
                        bottom: "10px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "95%",
                        maxWidth: "500px",
                        display: "flex",
                        alignItems: "center",
                        backgroundColor: "rgba(255,255,255,0.1)",
                        borderRadius: "30px",
                        padding: "8px 16px",
                        boxShadow: "0 0 10px rgba(0,0,0,0.2)",
                    }}
                    onClick={(e) => e.stopPropagation()} // 입력창 클릭 시 이벤트 버블링 막기
                >
                    <input
                        type="text"
                        placeholder="여기에 입력하세요"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        style={{
                            flexGrow: 1,
                            background: "transparent",
                            border: "none",
                            outline: "none",
                            color: "#fff",
                            fontSize: "16px",
                            fontFamily: 'Pretendardvariable, Pretendard, system-ui, sans-serif',
                        }}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") handleNext();
                        }}
                    />
                    <button
                        onClick={handleNext}
                        style={{
                            background: "rgba(135, 155, 234, 0.6)",
                            borderRadius: "50%",
                            width: "36px",
                            height: "36px",
                            border: "none",
                            marginLeft: "10px",
                            cursor: "pointer",
                        }}
                        aria-label="전송"
                    >
                        ▶
                    </button>
                </div>
            )}
        </div>
    );
}

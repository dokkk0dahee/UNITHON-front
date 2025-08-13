import { useState, useEffect, useRef } from "react";
import chatting from '../../../assets/icons/chatting-2.svg';

export default function Chatting({ chatId, name, onClose }) {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const messagesEndRef = useRef(null);

    

    useEffect(() => {
        const stored = localStorage.getItem(`chatMessages-${chatId}`);
        if (stored) setMessages(JSON.parse(stored));
    }, [chatId]);

    const handleSend = () => {
        if (input.trim() === "") return;
        const newMessage = {
        id: Date.now(),
        text: input,
        sender: "me",
        name: "나",
        };
        const autoReply = {
        id: Date.now() + 1,
        text: "어쩔방구",
        sender: "bot",
        name: "챗봇",
        };
        const finalMessages = [...messages, newMessage, autoReply];
        setMessages(finalMessages);
        localStorage.setItem(`chatMessages-${chatId}`, JSON.stringify(finalMessages));
        setInput("");
    };

    useEffect(() => {
        if (messagesEndRef.current) {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages]);

    return (
        <>
        <div
            className="fixed top-0 left-0 right-0 w-full flex items-center justify-between h-[48px] px-[20px] border-b-[1.5px] border-[#E0E0E0] bg-[#ffffff] z-100"
            >
            <div className="flex-1 text-center">
                <span className="text-[18px] font-bold text-black ml-[35px]">상담 챗봇</span>
            </div>
            <button
                onClick={onClose}
                className="text-[#9FB2F2] text-[14px] mr-[25px] bg-transparent border-none">
                종료
            </button>
        </div>

        {/* 메시지 영역: 상단 고정바(48px) 아래에서부터 인풋창 높이(56px) 위까지 스크롤 */}
        <div
        className="h-[calc(100vh-104px)] overflow-y-auto px-[24px] py-3 custom-scrollbar"
        style={{ paddingTop: "80px" }}  // 상단 고정바 + 여유 공간 약간 추가
        >
        {messages.map((msg, idx) => (
            <div
            key={msg.id}
            className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"} ${
                idx === 0 ? "pt-3" : "mb-2" /* 첫 메시지 위쪽에 패딩, 그 외는 margin-bottom 작게 */
            }`}
            >
            <div className={`flex flex-col ${msg.sender === "me" ? "items-end" : "items-start"}`}>
                <div className="flex items-end">
                <p
                    className={`max-w-[210px] px-[12px] py-[7px] rounded-[12px] text-[14px] ${
                    msg.sender === "me"
                        ? "bg-[#D4E1FF] text-[#505A9E]"
                        : "bg-[#F3F3F3] text-[#222] border border-[#E7E7E7]"
                    }`}
                >
                    {msg.text}
                </p>
                </div>
            </div>
            </div>
        ))}
        <div ref={messagesEndRef} />
        </div>

        {/* 입력창 - 화면 하단에 완전 고정 (네비게이션 스타일) */}
        <div
        className="fixed bottom-[70px] left-[15px] right-0 h-[56px] bg-[#FAFAFA] border-none flex items-center justify-center"
        style={{ zIndex: 1000 }}
        >
        <div className="relative w-[300px]">
            <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            className="w-full px-[10px] py-[10px] text-[15px] rounded-[20px] border border-[#D9D8DD] bg-white focus:outline-none pr-[48px]"
            placeholder="텍스트를 입력해주세요."
            />
            <button
            onClick={handleSend}
            type="button"
            className="absolute right-[-60px] top-1/2 -translate-y-1/2 w-[22px] border-none h-[22px] bg-transparent flex items-center justify-center"
            >
            <img
                src={chatting}
                alt="chat-send"
                style={{ width: "22px", height: "22px", border: "none" }}
            />
            </button>
        </div>

        </div>
        </>
    );
}

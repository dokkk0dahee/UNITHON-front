import { useState } from "react";
import Chatting from "./components/Chatting";

export default function ChatbotPage() {
  // 메시지 초기 상태 (비어있음)
    const [messagesResetFlag, setMessagesResetFlag] = useState(false);

    // 종료(초기화) 버튼 클릭 시 호출
    const onClose = () => {
        // localStorage 메시지 초기화 (chatId=1 기준)
        localStorage.removeItem("chatMessages-1");

        // messagesResetFlag를 바꿔서 Chatting 컴포넌트가 다시 로드되게 함
        setMessagesResetFlag((prev) => !prev);
    };

    return (
        <div className="p-6">

        {/* messagesResetFlag가 바뀌면 Chatting 컴포넌트가 key 바뀌면서 다시 마운트됨 */}
        <Chatting key={messagesResetFlag} chatId="1" name="상담 챗봇" onClose={onClose} />
        </div>
    );
}

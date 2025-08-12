import React, { useState, useEffect } from 'react';

const Voting = ({ className = "" }) => {
    const [votingData, setVotingData] = useState({
        question: "자신만의 플러팅 기술은 무엇인가요?",
        options: [
            { id: 1, text: "멋있게 옷입기", votes: 12, color: "bg-red-500" },
            { id: 2, text: "옆자리에 앉기", votes: 8, color: "bg-orange-500" },
            { id: 3, text: "사탕 주기", votes: 15, color: "bg-blue-500" }
        ],
        totalVotes: 41,
        hasVoted: false
    });

    const [selectedOption, setSelectedOption] = useState(null);

    useEffect(() => {
        console.log('Voting 컴포넌트가 렌더링되었습니다.');
    }, []);

    const handleVote = () => {
        if (!selectedOption) return;

        setVotingData(prev => {
            const newOptions = prev.options.map(option => 
                option.id === selectedOption 
                    ? { ...option, votes: option.votes + 1 }
                    : option
            );
            
            return {
                ...prev,
                options: newOptions,
                totalVotes: prev.totalVotes + 1,
                hasVoted: true
            };
        });
    };

    const getPercentage = (votes) => {
        return Math.round((votes / votingData.totalVotes) * 100);
    };

    return (
        <div className={`bg-[#FFFFFF] w-[313px] rounded-[15px] p-[15px] ${className}`} style={{minHeight: '400px', boxShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.10)"}}>
            <div className="">
                <div className="flex justify-between items-center">
                    <h3 className='text-[#4F72CE] text-[20px] text-left mt-[0px] mb-[0px] leading-[140%] tracking-[0]'
                        style={{ fontFamily: 'Pretendardvariable, Pretendard, system-ui, sans-serif', fontWeight: 700 }}>
                        오늘의 투표
                    </h3>
                    <p className="text-[12px] text-[#9292A2] text-right mt-[0px] mb-[0px] leading-[233%] tracking-[0] whitespace-nowrap"
                        style={{ fontFamily: 'Pretendardvariable, Pretendard, system-ui, sans-serif', fontWeight: 400 }}>
                        총 {votingData.totalVotes}명이 참여했습니다
                    </p>
                </div>
                <h4 className="text-[16px] text-[#2F4159] text-left mt-2 mb-0 leading-[140%] tracking-[0]"
                    style={{ fontFamily: 'Pretendardvariable, Pretendard, system-ui, sans-serif', fontWeight: 600 }}>
                    {votingData.question}
                </h4>
            </div>


        {/* 투표 영역 */}
            <div className="flex flex-col gap-[8px]">
                {votingData.options.map((option) => (
                    <div key={option.id} className="relative">
                        <button
                            onClick={() => !votingData.hasVoted && setSelectedOption(option.id)}
                            disabled={votingData.hasVoted}
                            className={`w-[283px] h-[28px] bg-[#FFFFFF] border-[#EBEBEB] border-[1px] px-[15px] py-[10px] rounded-[16px] transition-all duration-200 ${
                                selectedOption === option.id
                                    ? 'bg-[#FFFFFF] border-[#EBEBEB]'
                                    : 'border-[#F3F8FF] bg-[#849BEA]'
                            } ${
                                votingData.hasVoted ? 'cursor-default' : 'cursor-pointer'
                            }`}
                        >
                            <div className="flex items-center justify-between">
                                <span className="font-medium text-gray-800">
                                    {option.text}
                                </span>
                                <div className="flex items-center space-x-2">
                                    <span className="text-sm text-gray-600">
                                        {option.votes}표
                                    </span>
                                    {votingData.hasVoted && (
                                        <span className="text-sm font-semibold text-gray-800">
                                            {getPercentage(option.votes)}%
                                        </span>
                                    )}
                                </div>
                            </div>
                            
                            {votingData.hasVoted && (
                                <div className="mt-2">
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div
                                            className={`h-2 rounded-full ${option.color} transition-all duration-500`}
                                            style={{ width: `${getPercentage(option.votes)}%` }}
                                        ></div>
                                    </div>
                                </div>
                            )}
                        </button>
                    </div>
                ))}
            </div>

            {!votingData.hasVoted && (
                <button
                    onClick={handleVote}
                    disabled={!selectedOption}
                    className={`w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 ${
                        !selectedOption ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                >
                    투표하기
                </button>
            )}

            {votingData.hasVoted && (
                <div className="text-center">
                    <p className="text-green-600 font-medium">
                        투표가 완료되었습니다! 🎉
                    </p>
                    <button
                        onClick={() => {
                            setVotingData(prev => ({ ...prev, hasVoted: false }));
                            setSelectedOption(null);
                        }}
                        className="mt-3 text-blue-500 hover:text-blue-600 text-sm underline"
                    >
                        다시 투표하기
                    </button>
                </div>
            )}
        </div>
    );
};

export default Voting;

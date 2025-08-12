import BannerUser from './components/Banner-user';
import CardCarousel from './components/CardCarousel';
import Voting from './components/Voting';

export default function HomePage() {
    return (
        <div className="relative animate-fade-in min-h-full top-[-20px]">
            <BannerUser className="top-0"/>
            <div className="px-4 pb-4 mt-[30px]">
                {/* 카드 캐러셀 컴포넌트 추가 */}
                <CardCarousel className=""/>
            </div>
            <hr className="w-[343px] border-[#D8E3FF] my-[44px]" />
            <div className="px-4 pb-4">
                {/* 투표 컴포넌트 추가 */}
                <div className=" flex justify-center">
                    <Voting className=""/>
                </div>
            </div>
        </div>
    );
}

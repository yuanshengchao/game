import { Rank } from './components/Rank';
import { User } from './components/User';
import './index.css';

export function Home() {
  return (
    <div className="w-full h-full overflow-auto bg-black min-h-lvh absolute">
      <div className="w-full h-full max-w-[1920px] m-auto relative z-10">
        <img className="home-image" src="https://game.gtimg.cn/images/yxzj/web202311/bg-ba51e5f9.jpg" />
        {/* banner */}
        <div className="flex flex-row	flex-nowrap px-4 py-6 justify-between">
          <div className="text-3xl ">game xxx</div>
          {/* inner game link */}
          <div className="text-2xl flex flex-row	flex-nowrap justify-around flex-1 ">
            <div>首页</div>
            <div>游戏资料</div>
            <div>内容中心</div>
            <div>玩家支持</div>
          </div>
          {/* user login */}
          <User />
        </div>
        {/* rank */}
        <Rank />
      </div>
    </div>
  );
}

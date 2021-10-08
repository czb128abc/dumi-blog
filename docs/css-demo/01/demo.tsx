import 'dumi-blog';

export default () => {
  return (
    <div className="flex items-center justify-center">
      <div className="container">
        <div className="bg-black text-white flex items-center">
          <div className="part w-1/5">
            <div className="flex">
              <div className="flex-1 flex justify-center items-center">
                <span className="text-4xl iconfont icon-previous"></span>
              </div>
              <div className="flex-1  flex justify-center items-center">
                <span
                  className="transform scale-200"
                  style={{ transform: 'scale(2)' }}
                >
                  <span className="text-4xl iconfont icon-play"></span>
                </span>
              </div>
              <div className="flex-1  flex justify-center items-center">
                <span className="text-4xl iconfont icon-nextsong"></span>
              </div>
            </div>
          </div>
          <div className="part w-6/12">
            <div className="flex items-center">
              <div className="rounded-full h-24 w-24 m-1.5 ">
                <div className="rounded-lg bg-white h-full"></div>
              </div>
              <div className="flex-1">
                <div className="w-full h-2">
                  <div className="w-full h-full bg-white"></div>
                  <div className="rounded-full h-4 w-4 bg-red-600 transform -translate-y-3 translate-x-3/4"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="part flex-auto">
            <div className="flex align-center">
              <div className="flex-1 text-4xl iconfont icon-soundsize"></div>
              <div className="flex-1 text-4xl iconfont icon-clock"></div>
              <div className="flex-1 text-4xl iconfont icon-bottom"></div>
              <div className="flex-1 text-4xl iconfont icon-favoriteslist"></div>
              <div className="flex-1 text-4xl iconfont icon-musiclist"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

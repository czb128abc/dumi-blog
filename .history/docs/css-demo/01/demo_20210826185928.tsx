export default () => {
  return (
    <div className="flex items-center justify-center">
      <div className="container">
        <div className="bg-black text-white flex">
          <div className="part w-1/5">
            <div className="flex">
              <div className="flex-1 flex justify-center items-center">
                <span className="text-4xl iconfont icon-stepback"></span>
              </div>
              <div className="flex-1  flex justify-center items-center">
                <span
                  className="transform scale-200"
                  style={{ transform: 'scale(2)' }}
                >
                  <span className="text-4xl iconfont icon-stepback"></span>
                </span>
              </div>
              <div className="flex-1  flex justify-center items-center">
                <span className="text-4xl iconfont icon-stepback"></span>
              </div>
            </div>
          </div>
          <div className="part w-6/12">
            <div className="flex">
              <div className="flex-1">
                <div className="rounded-full h-24 w-24">Circle</div>
              </div>
              <div className="w-9/12">sdf</div>
            </div>
          </div>
          <div className="part flex-auto">3</div>
        </div>
      </div>
    </div>
  );
};

export default () => {
  return (
    <div className="flex items-center justify-center">
      <div className="container">
        <div className="bg-black text-white flex">
          <div className="part w-1/5">
            <div className="flex">
              <div className="flex-1">
                <span className="text-4xl iconfont icon-stepback"></span>
                <span className="text-4xl iconfont icon-stepback"></span>
                <span className="text-4xl iconfont icon-stepback"></span>
              </div>
              <div className="flex-1">2</div>
              <div className="flex-1">3</div>
            </div>
          </div>
          <div className="part w-6/12">2</div>
          <div className="part flex-auto">3</div>
        </div>
      </div>
    </div>
  );
};

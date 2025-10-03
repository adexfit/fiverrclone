function Featured() {
  return (
    <div className="h-[600px] bg-[#013914] flex items-center text-white">
      <div className="w-[1400px] flex items-center">
        <div className="flex flex-col gap-[30px]">
          <h1 className="text-[50px]">
            Find the perfect{" "}
            <span className="font-light italic">freelance</span> services for
            your business
          </h1>
          <div className="bg-white rounded-[5px] flex items-center justify-between overflow-hidden">
            <div className="flex items-center gap-2.5">
              <img src="./img/search.png" alt="" className="w-5 h-5 m-2.5" />
              <input
                type="text"
                placeholder='Try "building mobil app"'
                className="border-none outline-none"
              />
            </div>
            <button>Search</button>
          </div>
          <div className="popular">
            <span>Popular:</span>
            <button>Web Design</button>
            <button>WordPress</button>
            <button>Logo Design</button>
            <button>AI Services</button>
          </div>
        </div>
        <div className="right">
          <img src="./img/man.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Featured;

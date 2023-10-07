import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
ZingMp3.propTypes = {
  listMp3: PropTypes.array,
};

ZingMp3.defaultProps = {};

function ZingMp3(props) {
  // const {listMp3} = props
  const listMp3 = [
    {
      id: 1,
      name: "amy",
      src: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/4/5/4/9/45493e859cde749c75fb4377c14d0db3.jpg",
      content: "Thả mình vào những giai \n Thả mình vào những giai",
    },
    {
      id: 2,
      name: "amy",
      src: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/9/b/e/6/9be6f892a7f95ef25632752dd2a319c2.jpg",
      content: "Thả mình vào những giai \n Thả mình vào những giai",
    },
    {
      id: 3,
      name: "amy",
      src: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/5/1/7/6/517699467b67fbf68731346b1a9ac12c.jpg",
      content: "Thả mình vào những giai \n Thả mình vào những giai",
    },
  ];
  return (
    <div className="">
      <div className="w-50 mb-2 fixed bottom-4 left-6   select-none border-l-4 z-3 transition duration-75 border-green-400 bg-green-300 p-4 font-medium hover:border-green-500">
        Thành công rồi !
      </div>
      <ul className="text-white px-4 flex flex-row bg-orange-500 gap-4">
        {listMp3.map((mp3, index) => (
          <div className=" bg-orange-200 " key={mp3.id}>
            <li key={mp3.id} className="overflow-hidden max-w-xs">
              <img
                src={mp3.src}
                alt="hihi"
                className=" w-20 h-20 max-w-xs hover:scale-125 transition duration-500 cursor-pointer"
              />
              {/* <img
                src="https://tecdn.b-cdn.net/img/new/fluid/city/113.webp"
                class="max-w-xs hover:scale-125 absolute duration-300"
                alt="Louvre"
              /> */}
            </li>
          </div>
        ))}
      </ul>
      <div className="relative overflow-hidden max-w-xs w-30 border-8">
        <img
          src="https://tecdn.b-cdn.net/img/new/fluid/city/113.webp"
          className="max-w-xs w-30 hover:scale-150 transition duration-500 "
          alt="Louvre"
        />
      </div>
    </div>
  );
}

export default ZingMp3;

import { BsPlayFill, BsInfoCircle } from 'react-icons/bs';

const Billboard = () => {
  return (
    <div className="relative h-[56.25vw]">
      <video
        className="w-full h-[56.25vw] object-cover brightness-[60%]"
        autoPlay
        muted
        loop
        poster="/images/hero-poster.jpg"
        src="/videos/hero-video.mp4"
      ></video>
      <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16">
        <p className="text-white text-1xl md:text-5xl h-full w-[50%] lg:text-6xl font-bold drop-shadow-xl">
          스트레인저 씽스
        </p>
        <p className="text-white text-[8px] md:text-lg mt-3 md:mt-8 w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl">
          1983년 인디애나주의 작은 마을에서 한 소년이 흔적도 없이 사라진다. 소년을 찾던 사람들은 초자연적인 힘을 지닌 소녀와 마주치게 되고, 국가 기밀과 무시무시한 실험의 실체가 드러나기 시작한다.
        </p>
        <div className="flex flex-row items-center mt-3 md:mt-4 gap-3">
          <button
            className="
              bg-white
              text-white
              bg-opacity-30
              rounded-md
              py-1 md:py-2
              px-2 md:px-4
              w-auto
              text-xs lg:text-lg
              font-semibold
              flex
              flex-row
              items-center
              hover:bg-opacity-20
              transition
            "
          >
            <BsPlayFill className="mr-1" size={25} />
            재생
          </button>
          <button
            className="
              bg-gray-500
              text-white
              bg-opacity-30
              rounded-md
              py-1 md:py-2
              px-2 md:px-4
              w-auto
              text-xs lg:text-lg
              font-semibold
              flex
              flex-row
              items-center
              hover:bg-opacity-20
              transition
            "
          >
            <BsInfoCircle className="mr-1" size={25} />
            상세 정보
          </button>
        </div>
      </div>
    </div>
  );
}

export default Billboard;
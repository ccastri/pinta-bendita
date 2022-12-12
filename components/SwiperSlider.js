import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Keyboard } from 'swiper'
// Import Swiper styles
// import 'swiper/modules/keyboard/keyboard.min.css';
import 'swiper/css';
import Link from 'next/link';
import Image from 'next/image';

SwiperCore.use([Keyboard]);
const SwiperSlider = () => {
  return (
    <div className=' min-w-full h-50'>

      <Swiper
        modules={[Keyboard]}
        spaceBetween={50}
        slidesPerView={1}
        keyboard={{ enabled: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>{Slide()}</SwiperSlide>
        <SwiperSlide>{Slide()}</SwiperSlide>
        <SwiperSlide>{Slide()}</SwiperSlide>
        <SwiperSlide>{Slide()}</SwiperSlide>
        <SwiperSlide>{Slide()}</SwiperSlide>


      </Swiper>
    </div >
  )
  function Slide() {
    return (
      <div className="grid md:grid-cols-2 bg-red-400">
        <div className="image">
          <Link href={"/"}><Image src={"/scroll.png"} width={600} height={600} /></Link>
        </div>
        <div className="info flex justify-center flex-col">
          <div className="cat bg-white">
            <Link href={"/"}><span className="text-orange-600 hover:text-orange-800">Business, Travel</span></Link>
            <Link href={"/"}><span className="text-gray-800 hover:text-gray-600">- July 3, 2022</span></Link>
          </div>
          <div className="title bg-white">
            <Link href={"/"}><span className="text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600">Aprovecha este 50% por temporada de fin de año en la colección pasada</span></Link>
          </div>
          <p className=" bg-white text-gray-900 py-3">
            Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind
            text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
          </p>
          <h1 className='text-black'>author</h1>
        </div>
      </div>
    )
  }
}

export default SwiperSlider


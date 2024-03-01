import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../style/main.css";
import { EffectFade, Navigation, Pagination } from "swiper/modules";

const Carousel = () => {
  const imgStyle = {
    height: "400px", // Adjust the height value as needed
    objectFit: "cover", // Maintain aspect ratio and cover the container
  };

  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://www.siliconinfo.com/assets/images/slider/inner_page.jpg"
            alt=""
            style={imgStyle}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.samsungplaza.com.np/public/files/82431732CB445BA-S23%20FE%20Banner.png"
            alt=""
            style={imgStyle}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.samsungplaza.com.np/public/files/81312E6AF75851E-Galaxy%20S24%20Ultra%20in%20Nepal%20arrived.png"
            alt=""
            style={imgStyle}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://web.truphone.com/contentassets/b137abda0db2483c9b1f176ea13e7662/your-one-stop-esim-shop-carousel.jpg"
            alt=""
            style={imgStyle}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Carousel;

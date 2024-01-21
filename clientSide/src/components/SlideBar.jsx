import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SlideBar({ slideInfo }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className="container mx-auto">
      <Slider {...settings}>
        {slideInfo.map((slide, index) => (
          <div key={index} className="relative">
            <img src={slide.imageUrl} alt={slide.altText} className="w-[98%]" />
            <div className="absolute bottom-0 left-0  bg-opacity-50 p-4 text-white text-left">
              <h1 className=" text-2xl">
                <strong>{slide.heading}</strong>
              </h1>
              <h2 className=" text-xl">{slide.slogon}</h2>
              <a href={slide.redirectBtn}>
                <button className=" bg-yellow-600 w-auto p-2 text-2xl rounded-lg">
                  {slide.btnName}
                </button>
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SlideBar;

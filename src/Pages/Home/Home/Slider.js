import React from 'react';

const Slider = () => {
    return (
        <div>
            <div className="carousel w-full h-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://media.istockphoto.com/id/1346744481/photo/anonymous-chef-harvesting-fresh-vegetables-on-a-farm.jpg?b=1&s=170667a&w=0&k=20&c=cX67PyM5-oJrnKlH6hSTUYGEAYSsaFCYVRVSHDTOJc4=" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://media.istockphoto.com/id/871231060/photo/organic-food-signage-on-modern-supermarket-fresh-produce-vegetable-aisle.jpg?b=1&s=170667a&w=0&k=20&c=Y8SiR4Dd5WFeYn7JXzlTtlKxbjmMduzL81EflyuTNws=" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://media.istockphoto.com/id/1222581489/photo/farmer-woman-holding-wooden-box-full-of-fresh-raw-vegetables.jpg?b=1&s=170667a&w=0&k=20&c=X979xLZ8zHsXQmeufE8Y7jgZ3leoNkvlMXKKGJxw9Ko=" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
</div>
        </div>
    );
};

export default Slider;
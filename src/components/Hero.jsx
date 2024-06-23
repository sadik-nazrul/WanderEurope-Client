/* eslint-disable react/no-unescaped-entities */
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Hero = () => {

    return (
        <div>
            <Swiper
                spaceBetween={30}
                effect={'fade'}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                modules={[EffectFade, Autoplay, Pagination]}
                className='h-[calc(100vh-68px)]'
            >
                <SwiperSlide className="relative bg-[url('https://i.ibb.co/jv67ZCN/england.png')] bg-cover bg-center">
                    <div className="absolute inset-0 bg-secondary opacity-50"></div>
                    <div className='relative z-10 text-white h-full flex justify-center items-center flex-col'>
                        <h2 className="text-4xl font-medium">Relive Historic Majesty</h2>
                        <p>Explore England's iconic landmarks and royal heritage.</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="relative bg-[url('https://i.ibb.co/ZJnrb1J/france.png')] bg-cover bg-center">
                    <div className="absolute inset-0 bg-secondary opacity-50"></div>
                    <div className='relative z-10 text-white h-full flex justify-center items-center flex-col'>
                        <h2 className="text-4xl font-medium">Experience Parisian Elegance</h2>
                        <p>Discover the charm and romance of France.</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="relative bg-[url('https://i.ibb.co/C5G9TrM/italy.png')] bg-cover bg-center">
                    <div className="absolute inset-0 bg-secondary opacity-50"></div>
                    <div className='relative z-10 text-white h-full flex justify-center items-center flex-col'>
                        <h2 className="text-4xl font-medium">Savor Italian Riches</h2>
                        <p>Enjoy the vibrant history and flavors of Italy.</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="relative bg-[url('https://i.ibb.co/XWJM0Yc/spain.png')] bg-cover bg-center">
                    <div className="absolute inset-0 bg-secondary opacity-50"></div>
                    <div className='relative z-10 text-white h-full flex justify-center items-center flex-col'>
                        <h2 className="text-4xl font-medium">Celebrate Spanish Passion</h2>
                        <p>Immerse yourself in Spain's lively culture and traditions.</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="relative bg-[url('https://i.ibb.co/jkVgLGc/netherland.png')] bg-cover bg-center">
                    <div className="absolute inset-0 bg-secondary opacity-50"></div>
                    <div className='relative z-10 text-white h-full flex justify-center items-center flex-col'>
                        <h2 className="text-4xl font-medium">Explore Dutch Delights</h2>
                        <p>Unveil the beauty of the Netherlands' landscapes and culture.</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="relative bg-[url('https://i.ibb.co/9sVKBwm/switzerland.png')] bg-cover bg-center">
                    <div className="absolute inset-0 bg-secondary opacity-50"></div>
                    <div className='relative z-10 text-white h-full flex justify-center items-center flex-col'>
                        <h2 className="text-4xl font-medium">Embrace Alpine Splendor</h2>
                        <p>Dive into Switzerland's breathtaking mountains and serene lakes.</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Hero;

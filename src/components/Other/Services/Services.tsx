import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/Other/UI/card'
import { servicesData } from '@/data/service'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'
import { Pagination, Navigation, Autoplay } from 'swiper/modules'

const Services = () => {
  return (
    <section id="minhas-lutas" className="mb-12 xl:mb-4">
      <div className="container mx-auto">
        <h2 className="section-title mb-4 xl:mb-10 text-center mx-auto">
          MINHAS LUTAS
        </h2>
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          // autoplay={{
          //   delay: 4000,
          //   disableOnInteraction: false,
          // }}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {servicesData.slice(0, 6).map((item: any, index: any) => (
            <SwiperSlide key={index}>
              <Card
                className="w-full max-w-[424px] h-[240px] xl:h-[300px] flex flex-col
                     pt-16 pb-10 justify-center items-center relative border-t-4 border-double border-primary"
              >
                <CardHeader className="text-primary bg-white e border-4 border-white p-0 absolute -top-[50px]">
                  <div
                    className="w-[100px] h-[80px] sm:w-[140px] sm:h-[80px]
                             flex justify-center items-center"
                  >
                    {item.icon}
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <CardTitle className="mb-4">{item.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Services

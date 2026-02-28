import {useEffect, useState} from "react";
import type {EmblaCarouselType} from "embla-carousel";
import {Carousel} from "@mantine/carousel";
import {motion} from "framer-motion";

import Slide1 from "@/assets/img/carousel.jpg";
import Slide2 from "@/assets/img/carouselNew2.jpg";
import Slide3 from "@/assets/img/carouselNew3.png";
import Slide4 from "@/assets/img/carouselNew4.jpg";
import Slide5 from "@/assets/img/carouselNew5.jpg";

const slides = [
    {image: Slide1},
    {image: Slide2},
    {image: Slide3},
    {image: Slide4},
    {image: Slide5},
];

export const ProjectSlide = () => {
    const [embla, setEmbla] = useState<EmblaCarouselType | null>(null);

    useEffect(() => {
        if (!embla) return;

        const interval = setInterval(() => {
            if (embla.canScrollNext()) {
                embla.scrollNext();
            } else {
                embla.scrollTo(0);
            }
        }, 2000);

        return () => clearInterval(interval);
    }, [embla]);

    return (
        <div className="py-[30px] px-[12px] bg-secondary">
            <motion.div
                initial={{opacity: 0, scale: 0.95}}
                whileInView={{opacity: 1, scale: 1}}
                viewport={{once: true}}
                transition={{duration: 0.7}}
            >
                <Carousel
                    emblaOptions={{loop: true}}
                    slideSize="100%"
                    slideGap="0"
                    height={330}
                    getEmblaApi={setEmbla}
                    className={"rounded-[10px]"}
                >
                    {slides.map((slide, index) => (
                        <Carousel.Slide key={index} className={"rounded-[10px]"}>
                            <img
                                src={slide.image}
                                width={220}
                                height={300}
                                className="object-cover rounded-[10px] mx-auto"
                                alt={`slide-${index}`}
                            />
                        </Carousel.Slide>
                    ))}
                </Carousel>
            </motion.div>
        </div>
    );
};
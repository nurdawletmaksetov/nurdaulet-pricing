import {motion} from "framer-motion";
import Image from "@/assets/img/banner.jpg"
export const About = () => {
    return (
        <div
            id="about"
            className="flex flex-col items-center gap-[30px] px-[12px] py-[30px] bg-primary"
        >
            <motion.h1
                initial={{opacity: 0, y: -40}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: 0.7}}
                className="text-[48px] text-heading font-extrabold"
            >
                about.
            </motion.h1>

            <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{once: true}}
                variants={{
                    hidden: {},
                    show: {
                        transition: {
                            staggerChildren: 0.2
                        }
                    }
                }}
            >
                {[
                    "Мен — кәсіби фотографпын, фотография саласында 5 жылдан астам тәжірибем бар.",
                    "Осы уақыт ішінде портрет, love story, отбасылық және түрлі іс-шара фотосессияларын түсіріп келемін.",
                    "Әр түсірілімде табиғи эмоцияны, шынайы сәттерді және жайлы атмосфераны басты орынға қоямын.",
                    "Жауапкершілік, ұқыптылық және сапалы нәтиже — менің жұмысымның негізгі қағидалары."
                ].map((text, index) => (
                    <motion.p
                        key={index}
                        variants={{
                            hidden: {opacity: 0, y: 20},
                            show: {opacity: 1, y: 0}
                        }}
                        className="text-[13px] text-[#000] font-medium text-center font-roboto"
                    >
                        {text}
                    </motion.p>
                ))}
            </motion.div>

            <motion.img
                src={Image}
                width={220}
                height={320}
                alt="about"
                className="rounded-[10px]"
                initial={{scale: 0.8, opacity: 0}}
                whileInView={{scale: 1, opacity: 1}}
                viewport={{once: true}}
                transition={{duration: 0.7}}
            />
        </div>
    );
};
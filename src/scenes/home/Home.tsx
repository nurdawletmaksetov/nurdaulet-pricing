import {motion} from "framer-motion";

export const Home = () => {
    return (
        <div
            id="home"
            className="py-[30px] bg-[url(/public/img/banner.JPG)] bg-cover bg-center bg-fixed flex items-center justify-center h-screen"
        >
            <div className="flex h-full flex-col items-center justify-end gap-[32px]">

                <div className="flex flex-col items-center">

                    <motion.h1
                        initial={{opacity: 0, y: -40}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.8}}
                        className="text-[32px] text-primary font-semibold"
                    >
                        Nurdaulet Yergaliy
                    </motion.h1>

                    <motion.p
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{delay: 0.3, duration: 0.8}}
                        className="text-[11px] text-primary font-extralight"
                    >
                        Wedding Photographer
                    </motion.p>
                </div>

                <motion.p
                    initial={{opacity: 0, scale: 0.9}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{delay: 0.6, duration: 0.8}}
                    className="text-[13px] text-primary font-light"
                >
                    Price list 2026
                </motion.p>

            </div>
        </div>
    );
};
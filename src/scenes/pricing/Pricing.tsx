import {motion} from "framer-motion";

export const Pricing = () => {
    return (
        <div id={"price"} className={"px-[12px] py-[30px] bg-primary flex flex-col items-center gap-[30px]"}>

            <motion.h1
                initial={{opacity: 0, y: -40}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: 0.6}}
                className={"text-[48px] text-heading font-extrabold"}
            >
                Price List.
            </motion.h1>

            {/** Basic */}
            <motion.div
                initial={{opacity: 0, x: -60}}
                whileInView={{opacity: 1, x: 0}}
                viewport={{once: true}}
                transition={{duration: 0.6}}
                className={"flex w-full justify-start"}
            >
                <div className={"w-[290px] gap-[15px] flex flex-col p-[22px] bg-secondary rounded-[10px]"}>
                    <h1 className={"text-[24px] text-[#14A800] font-extrabold"}>Basic</h1>
                    <ul className={"flex flex-col gap-[5] list-disc pl-[12px] text-gray-400 font-roboto"}>
                        <li>Түсірілім: 1 сағат</li>
                        <li>100–200 өңделген фото</li>
                        <li>Авторлық цветокоррекция</li>
                        <li>Дайын фото: 7-8 күн</li>
                    </ul>
                    <h1 className={"text-[24px] text-primary font-medium"}>Bagasi: 28 000 ₸</h1>
                </div>
            </motion.div>

            {/** Standart */}
            <motion.div
                initial={{opacity: 0, x: 60}}
                whileInView={{opacity: 1, x: 0}}
                viewport={{once: true}}
                transition={{duration: 0.6}}
                className={"flex w-full justify-end"}
            >
                <div className={"w-[290px] gap-[15px] flex flex-col p-[22px] bg-secondary rounded-[10px]"}>
                    <h1 className={"text-[24px] text-[#14A800] font-extrabold"}>Standart</h1>
                    <ul className={"flex flex-col gap-[5] list-disc pl-[12px] text-gray-400 font-roboto"}>
                        <li>Түсірілім: 2 сағат</li>
                        <li>300–400 өңделген фото</li>
                        <li>Ретуш + цветокоррекция</li>
                        <li>Локация таңдауға көмек</li>
                        <li>Дайын фото: 3-4 күн</li>
                    </ul>
                    <h1 className={"text-[24px] text-primary font-medium"}>Bagasi: 50 000 ₸</h1>
                </div>
            </motion.div>

            {/** Premium */}
            <motion.div
                initial={{opacity: 0, x: -60}}
                whileInView={{opacity: 1, x: 0}}
                viewport={{once: true}}
                transition={{duration: 0.6}}
                className={"flex w-full justify-start"}
            >
                <div className={"w-[290px] gap-[15px] flex flex-col p-[22px] bg-secondary rounded-[10px]"}>
                    <h1 className={"text-[24px] text-[#14A800] font-extrabold"}>Premium</h1>
                    <ul className={"flex flex-col gap-[5] list-disc pl-[12px] text-gray-400 font-roboto"}>
                        <li>Түсірілім: 6–7 сағат</li>
                        <li>700–800 өңделген фото</li>
                        <li>Терең ретуш</li>
                        <li>Қысқа Reels / backstage (қаласа)</li>
                        <li>Видеограф +</li>
                        <li>Дайын фото: 5-6 күн</li>
                    </ul>
                    <h1 className={"text-[24px] text-primary font-medium"}>Bagasi: 100 000 ₸</h1>
                </div>
            </motion.div>

            {/** Other Services */}
            <motion.div
                initial={{opacity: 0, x: 60}}
                whileInView={{opacity: 1, x: 0}}
                viewport={{once: true}}
                transition={{duration: 0.6}}
                className={"flex w-full justify-end"}
            >
                <div className={"w-[290px] gap-[15px] flex flex-col p-[22px] bg-secondary rounded-[10px]"}>
                    <h1 className={"text-[24px] text-[#14A800] font-extrabold"}>Other Services</h1>
                    <ul className={"flex flex-col gap-[5] list-disc pl-[12px] text-gray-400 font-roboto"}>
                        <li>Қала сыртында түсірілім</li>
                        <li> Жедел тапсырыс (24 сағ)</li>
                        <li>Видео / мобилография</li>
                        <li>Образ / стилист ұсынысы</li>
                    </ul>
                </div>
            </motion.div>

            {/** Important */}
            <motion.div
                initial={{opacity: 0, x: -60}}
                whileInView={{opacity: 1, x: 0}}
                viewport={{once: true}}
                transition={{duration: 0.6}}
                className={"flex w-full justify-start"}
            >
                <div className={"w-[290px] gap-[15px] flex flex-col p-[22px] bg-secondary rounded-[10px]"}>
                    <h1 className={"text-[24px] text-[#14A800] font-extrabold"}>IMPORTANT INFORMATION</h1>
                    <ul className={"flex flex-col gap-[5] list-disc pl-[12px] text-gray-400 font-roboto"}>
                        <li>Бронь – алдын ала</li>
                        <li>Алдын ала төлем: 50%</li>
                        <li>Авторлық стиль сақталады</li>
                    </ul>
                </div>
            </motion.div>

        </div>
    );
};
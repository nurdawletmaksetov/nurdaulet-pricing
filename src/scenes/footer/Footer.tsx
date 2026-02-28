import {Call, Instagram, Whatsapp} from "iconsax-reactjs";
import {Divider} from "@mantine/core";

export const Footer = () => {

    const phone = "+7 778 258 2134";
    const instagram = "https://instagram.com/nurdaulet.ergaliy";
    const whatsapp = "https://wa.me/77782582134";

    return (
        <div className={"flex flex-col bg-secondary pt-[20px] px-[12px]"}>
            <div className={"flex flex-col items-start gap-[10px] pb-[20px]"}>
                <h1 className={"text-[18px] font-semibold font-poppins text-primary"}>
                    Contact
                </h1>

                <div className={"flex flex-col items-start gap-[6px]"}>

                    <a href={`tel:${phone}`} className="flex items-center gap-[8px]">
                        <Call size={18} color={"white"}/>
                        <p className={"text-primary text-[14px] font-medium font-poppins"}>
                            {phone}
                        </p>
                    </a>

                    <a href={instagram} target="_blank" className="flex items-center gap-[8px]">
                        <Instagram size={18} color={"white"}/>
                        <p className={"text-primary text-[14px] font-medium font-poppins"}>
                            @nurdaulet.ergaliy
                        </p>
                    </a>

                    <a href={whatsapp} target="_blank" className="flex items-center gap-[8px]">
                        <Whatsapp size={18} color={"white"}/>
                        <p className={"text-primary text-[14px] font-medium font-poppins"}>
                            +7 778 258 2134
                        </p>
                    </a>

                </div>
            </div>

            <Divider/>

            <p className={"font-light font-poppins text-center py-[8px] text-[10px] text-[#F1F1F1]"}>
                designer and developer: @m_nurdawlet
            </p>
        </div>
    );
};
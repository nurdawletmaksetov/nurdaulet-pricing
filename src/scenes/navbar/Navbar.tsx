import {HamburgerMenu} from "iconsax-reactjs";
import {useEffect, useRef, useState} from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import {IconX} from "@tabler/icons-react";

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll, {passive: true});
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Outside click yopish
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    const isActive = isScrolled || isOpen;

    return (
        <>
            <div
                className={`px-[12px] fixed top-0 left-0 w-full z-50 
                ${isActive ? "bg-white" : "bg-transparent"}`}
            >
                <div className="flex items-center justify-between py-[12px]">
                    <h1
                        className={`text-[16px] font-extralight font-poppins
                        ${isActive ? "text-black" : "text-white"}`}
                    >
                        ER.NUR.PRO
                    </h1>

                    <button onClick={() => setIsOpen(!isOpen)}>
                        {!isOpen ? (
                            <HamburgerMenu
                                size={24}
                                color={isActive ? "#000" : "#fff"}
                            />
                        ) : (
                            <IconX
                                size={24}
                                color={isActive ? "#000" : "#fff"}
                            />
                        )}
                    </button>
                </div>
            </div>

            {isOpen && (
                <div
                    ref={menuRef}
                    className="fixed top-[30px] left-0 w-full bg-white shadow-lg py-[20px] px-[12px] flex flex-col gap-4"
                >
                    <AnchorLink href="#home" onClick={() => setIsOpen(false)}>
                        Home
                    </AnchorLink>
                    <AnchorLink href="#about" onClick={() => setIsOpen(false)}>
                        About
                    </AnchorLink>
                    <AnchorLink href="#price" onClick={() => setIsOpen(false)}>
                        Price List
                    </AnchorLink>
                </div>
            )}
        </>
    );
};
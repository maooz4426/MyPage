"use client"
import Image from "next/image";
import {motion} from "framer-motion";
import React from "react";
import nextConfig from "../../next.config.mjs";
import Link from "next/link";
const BASE_PATH = nextConfig.basePath || "";


// interface Props {
//     openMenu: boolean;
//     toggleMenu: () => void;
//     basepath: string;
// }


export const Menubar:React.FC　= () =>{
    const[isOpenMenu,setIsOpenMenu]=React.useState(false);
    const toggleMenu = () =>{
        setIsOpenMenu(!isOpenMenu);
        console.log("open menu",isOpenMenu);
    }

     const closeMenu = () =>{
        setIsOpenMenu(false);
     }
    return (

        <div className=" justify-end">
            {!isOpenMenu ? (<button onClick={toggleMenu} className="relative top-10 left-10 size-3">
                <div>
                    <svg
                        className="block h-10 w-10 fill-current"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                    </svg>
                </div>
            </button>):undefined}

            {isOpenMenu ? (
                <div>
                    {/*zの位置を上に上げないとボタンが反応しない*/}
                    <motion.button onClick={toggleMenu} className="relative top-10 left-10 z-50">
                        <div>
                            <Image
                                src={`${BASE_PATH}/images/batu.svg`}
                                alt="Close"
                                width={40}
                                height={40}
                            />
                        </div>
                    </motion.button>

                    <motion.div className="fixed inset-0 bg-black bg-opacity-50 z-40 ">

                        <motion.div
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}
                            transition={{duration: 0.3}}
                            className="fixed inset-0 flex justify-center items-center"
                        >

                            <motion.nav
                                className="flex flex-col items-center"
                                initial={{scale: 0.8, opacity: 0}}
                                animate={{scale: 1, opacity: 1}}
                                exit={{scale: 0.8, opacity: 0}}
                                transition={{duration: 0.3}}
                            >
                                <motion.a
                                    // href={`${BASE_PATH}/`}
                                    className="text-4xl text-white mb-8 cursor-pointer"
                                    whileHover={{scale:1.1}}
                                    whileTap={{scale: 0.95}}
                                    onClick={closeMenu}
                                >
                                    {/*Linkはサブディレクトリを考慮する*/}
                                    <Link href={`/`}>
                                        Home
                                    </Link>

                                </motion.a>

                                <motion.a
                                    // href={`${BASE_PATH}/profile`}
                                    className="text-4xl text-white mb-8 cursor-pointer"
                                    whileHover={{scale: 1.1}}
                                    whileTap={{scale: 0.95}}
                                    onClick={closeMenu}

                                >
                                    <Link href={`/profile`}>
                                        Profile
                                    </Link>

                                </motion.a>
                                <motion.a
                                    // href={`${BASE_PATH}/work`}
                                    className="text-4xl text-white cursor-pointer"
                                    whileHover={{scale: 1.1}}
                                    whileTap={{scale: 0.95}}
                                    onClick={closeMenu}

                                >
                                    <Link href={`/work`}>
                                        Work
                                    </Link>

                                </motion.a>

                            </motion.nav>
                        </motion.div>
                    </motion.div>
                </div>
            ) : undefined

            }
        </div>
    )
}
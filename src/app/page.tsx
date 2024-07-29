"use client"; // 500エラーを防ぐために必要
import Image from "next/image";
import {AnimatePresence, motion} from 'framer-motion'
import IconLink from "../components/iconLink";
import nextConfig from "../../next.config.mjs";
import React from "react"
const BASE_PATH = nextConfig.basePath || "";


export default function Home() {
    const[openMenu,setOpenMenu]=React.useState(false);

    const toggleMenu = () =>{
        setOpenMenu(!openMenu);
        console.log("open menu",openMenu);

    }

    return (
        <div className={`screen min-h-screen `}>
            <AnimatePresence mode="wait">
                <div className="relative grid grid-cols-4">
                    {!openMenu ? (<button onClick={toggleMenu} className="relative top-10 left-10 size-3">
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

                    {openMenu ? (
                            <div>
                                {/*zの位置を上に上げないとボタンが反応しない*/}
                                <button onClick={toggleMenu} className="relative top-10 left-10 z-50">
                                    <div>
                                        <Image
                                            src={`${BASE_PATH}/images/batu.svg`}
                                            alt="Close"
                                            width={40}
                                            height={40}
                                        />
                                    </div>
                                </button>

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
                                    className="text-4xl text-white mb-8 cursor-pointer"
                                    whileHover={{scale: 1.1}}
                                    whileTap={{scale: 0.95}}
                                >
                                    About
                                </motion.a>
                                <motion.a
                                    className="text-4xl text-white cursor-pointer"
                                    whileHover={{scale: 1.1}}
                                    whileTap={{scale: 0.95}}
                                >
                                    Work
                                </motion.a>

                            </motion.nav>
                        </motion.div>
                        </motion.div>
                            </div>
                    ) : undefined

                    }


                    <div className="main col-span-4 mx-auto my-10">
                    <motion.div
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{duration: 0.5, delay: 0.5}}
                            key="image-container"
                        >
                            <Image
                                src="/images/img.png"
                                alt="icon"
                                width={500}
                                height={500}
                            />
                        </motion.div>

                        <motion.div
                            className="flex items-center justify-center my-5"
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{duration: 1, delay: 1}}
                            key="image-container"
                        >
                            <div className="name text-center text-9xl">
                                <h1>MAOZ</h1>
                            </div>
                        </motion.div>

                        <motion.div
                            className="flex items-center justify-center my-5"
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{duration: 1, delay: 2}}
                        >
                            <IconLink src={`${BASE_PATH}/images/Github.svg`}
                                      alt="Github logo"
                                      href="https://github.com/maooz4426"
                            />
                            <IconLink src={`${BASE_PATH}/images/qiita-icon.png`}
                                      alt="qiita logo"
                                      href="https://qiita.com/maooz4426"
                            />
                            <IconLink src={`${BASE_PATH}/images/x-logo.svg`}
                                      alt="xicon logo"
                                      href="https://x.com/maotan426"
                            />
                        </motion.div>
                    </div>


                </div>


            </AnimatePresence>
        </div>
    );
}
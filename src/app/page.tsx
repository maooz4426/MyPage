"use client"; // 500エラーを防ぐために必要
import Image from "next/image";
import {AnimatePresence, motion} from 'framer-motion'
import IconLink from "@/components/IconLink";
import nextConfig from "../../next.config.mjs";
const BASE_PATH = nextConfig.basePath || "";
import {Menubar} from "@/components/Menubar";

export default function Home() {
    return (
        <div className={`screen min-h-screen `}>

            <AnimatePresence mode="wait">
                <div className="relative grid grid-cols-4">
                    <Menubar/>{/*gridの中に入れないと動かない*/}

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
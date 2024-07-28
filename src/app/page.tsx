"use client"; // 500エラーを防ぐために必要
import Image from "next/image";
import {AnimatePresence, motion} from 'framer-motion'
import IconLink from "../components/iconLink";
import nextConfig from "../../next.config.mjs";
const BASE_PATH = nextConfig.basePath || "";

export default function Home() {
    return (
        <div className="min-h-screen">
            <AnimatePresence mode="wait">
                <motion.div
                    className="flex my-10 items-center justify-center w-full h-full"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 0.5,delay: 0.5}}
                    key="image-container"
                >
                    <div>
                        <Image
                            src="public/images/img.png"
                            alt="icon"
                            width={500}
                            height={500}
                        />
                    </div>
                </motion.div>
                <motion.div
                    className="flex my-10 items-center justify-center w-full h-full"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 1,delay: 1}}
                    key="image-container"
                >
                    <div className="name text-center text-9xl">
                        <h1>MAOZ</h1>
                    </div>
                </motion.div>

                <motion.div
                    className="flex my-10 items-center justify-center w-full h-full"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 1, delay: 2}}
                >
                    <IconLink src=`${BASE_PATH}/images/Github.svg`
                                   alt="Github logo"
                                   href="https://github.com/maooz4426"
                    />
                    <IconLink src="/images/qiita-icon.png"
                                   alt="qiita logo"
                                   href="https://qiita.com/maooz4426"
                    />
                    <IconLink src="/images/x-logo.svg"
                                   alt="xicon logo"
                                   href="https://x.com/maotan426"
                    />
                </motion.div>
            </AnimatePresence>
        </div>
    );
}

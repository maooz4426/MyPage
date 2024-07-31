"use client"
import {AnimatePresence, motion} from "framer-motion";
import {Menubar} from "@/components/Menubar";
import React from "react";

export default function AboutPage() {
    return(
        <div>
        <Menubar/>
            <AnimatePresence mode="wait">
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    transition={{duration: 0.3, delay: 0.5}}
                    className="flex flex-col items-center text-4xl my-20 underline"
                >Profile
                </motion.div>
                /

                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    transition={{duration: 0.3, delay: 1}}
                    className="flex flex-col items-center text-4xl my-5 ">
                    尾﨑真央
                </motion.div>
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    transition={{duration: 0.3, delay: 1}}
                    className="flex flex-col items-center text-1xl my-5 ">
                    ozaki mao
                </motion.div>

                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    transition={{duration: 0.3, delay: 1}}
                    className="flex flex-col items-center text-1xl my-5 ">
                    エンタメコンテンツが大好きな大学生エンジニア
                </motion.div>
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    transition={{duration: 0.3, delay: 1}}
                    className="flex flex-col items-center text-1xl my-5 ">
                    2024年度 立命館コンピュータクラブ執行委員長
                </motion.div>
            </AnimatePresence>
        </div>
    )
}
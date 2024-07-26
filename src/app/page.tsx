"use client"; //かかないと500エラー起きる
import Image from "next/image";
import {AnimatePresence, motion} from 'framer-motion'
import styles from "./page.module.css";


export default function Home() {
  return (
      // <div className="bg-gradient-to-b from-slate-900 to-slate-800  min-h-screen　w-full h-screen">
      <div className={`min-h-screen`}>
          <AnimatePresence mode="wait">
              <motion.div
                  className="flex my-10 items-center justify-center w-full h-full"
                  initial={{opacity: 0}}
                  animate={{opacity: 1}}
                  transition={{duration: 0.5,delay: 0.5}}
                  key="image-container"
              >
                  <div >
                      <Image
                          src="/images/img.png"
                          alt="icon"
                          width={500}
                          height={500}
                      />
                  </div>

              </motion.div>
              <motion.div className="flex my-10 items-center justify-center w-full h-full"
                  initial={{opacity: 0}}
                  animate={{opacity: 1}}
                  transition={{duration: 1,delay: 1}}
                  key="image-container">
                  <div className="name text-center text-9xl">
                      <h1>MAOZ</h1>
                  </div>
              </motion.div>
              <motion.div className={"flex my-10 items-center justify-center w-full h-full"}
                          initial={{opacity: 0}}
                          animate={{opacity: 1}}
                          transition={{duration: 1,delay: 2}}>
                      <Image src="/images/Github.svg"
                             alt="Github logo"
                             width={100}
                             height={100}/>
              </motion.div>


          </AnimatePresence>

      </div>
  );
}

"use client"
import {motion} from "framer-motion";
import React from "react";
import {Menubar} from "@/components/Menubar";
import {ContentTemplate} from "@/components/ContentTemplate";
import nextConfig from "../../../next.config.mjs";
const BASE_PATH = nextConfig.basePath || "";
import Image from "next/image";

export default function WorkPage (){


  return(
      <div>
          <Menubar/>
          <div className="flex flex-col items-center">
          <motion.div
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              exit={{opacity: 0}}
              transition={{duration: 0.3, delay: 0.5}}
              className=" text-4xl my-20 underline"
          >Work
          </motion.div>

          <motion.div
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              exit={{opacity: 0}}
              transition={{duration: 0.3, delay: 0.5}}
              className="text-2xl  underline"
          >Internship
          </motion.div>
          </div>


          <div className="grid grid-cols-2">
          <motion.div
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{duration: 1, delay: 2}}
              className=" mx-4 my-10">
              <div className="w-full flex flex-col mx-auto items-center">
                  <Image
                      src={`${BASE_PATH}/images/plateau-sdk-game.png`}
                      alt="plateau-sdk"
                      width={500}
                      height={400}
                      className="w-2/3"
                  />
                  <h1 className="text-2xl my-2 underline">PLATEAU SDKの宣伝ゲーム</h1>
              </div>
          </motion.div>
          <motion.div
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{duration: 1, delay: 2}}
              className="my-10 flex flex-col items-center justify-center">
              <Image
                  src={`${BASE_PATH}/images/reportkun.png`}
                  alt="plateau-sdk"
                  width={500}
                  height={400}
                  className="w-2/3"
              />
              <h1 className="text-2xl my-2 underline">レポートお助けくん</h1>
          </motion.div>
          </div>




      </div>

// </div>
)
}
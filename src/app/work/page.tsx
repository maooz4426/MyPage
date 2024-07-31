"use client"
import {motion} from "framer-motion";
import React from "react";
import {Menubar} from "@/components/Menubar";
import {ContentTemplate} from "@/components/ContentTemplate";

export default function WorkPage (){
  return(
      <div>
          <Menubar/>
          <motion.div
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              exit={{opacity: 0}}
              transition={{duration: 0.3, delay: 0.5}}
              className="flex flex-col items-center text-4xl my-20 underline"
          >Work
          </motion.div>
          {/*<motion.div*/}
          {/*className ="h-96 w-80  backdrop-blur-lg rounded-md border border-gray-200/30 shadow-lg">*/}
          {/*  aaaaaa*/}
          {/*</motion.div>*/}
          <div className="flex flex-col items-center ">
              <ContentTemplate>

              </ContentTemplate>
          </div>
      </div>
  )
}
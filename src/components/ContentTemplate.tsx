import css from "styled-jsx/css";
import {motion} from "framer-motion";
import React from "react";
import Image from "next/image";

 interface ContentTemplateProps {
     children: React.ReactNode;
 }

export const ContentTemplate: React.FC<ContentTemplateProps> = ({children}) =>{
    return (
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 1, delay: 2}}
                // className=" w-4/5  backdrop-blur-lg rounded-md border border-gray-200/30 shadow-lg">
                className="w-4/5 mx-auto my-10"
                >
                {children}
            </motion.div>

    )
}
interface DialogTemplateProps {
     children: React.ReactNode;
    src:string;
}

export const DialogTemplate: React.FC<DialogTemplateProps> = (props) =>{
     return (
         <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-125">
                 <motion.div
                     initial={{opacity: 0}}
                     animate={{opacity: 1}}
                     exit={{opacity: 0}}
                     transition={{duration: 1, delay: 0.5}}
                     className=" backdrop-blur-lg rounded-md border border-gray-200/30 shadow-lg grid grid-cols-2"
                 >
                    <Image
                        src={props.src}
                        alt="dialog img"
                        width={500}
                        height={500}
                        className="m-0.5"
                    />
                     <div>
                         {props.children}
                     </div>
                 </motion.div>
             </div>


     )
}
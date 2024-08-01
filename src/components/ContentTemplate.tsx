import css from "styled-jsx/css";
import {motion} from "framer-motion";
import React from "react";

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
import css from "styled-jsx/css";
import {motion} from "framer-motion";
import React from "react";

 interface ContentTemplateProps {
     children: React.ReactNode;
 }

export const ContentTemplate: React.FC<ContentTemplateProps> = ({children}) =>{
    return (
            <motion.div
                className="h-96 w-4/5  backdrop-blur-lg rounded-md border border-gray-200/30 shadow-lg">

                {children}
            </motion.div>

    )
}
import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion"

const About = () => {
  return <div className="border-b border-neutral-900 pb-4">
    <h2 className="my-20 text-center text-4xl">About 
        <span className=""> Me </span> 
        </h2>
           
                <motion.div 
                whileInView={{opacity:1,x:0}}
                initial={{opacity:0, x:100}}
                transition={{duration:0.5}}
                className="w-full ">
                <div className="flex  lg:justify-start text-center">
                    <p className=" tracking-tight text-center justify-center">{ABOUT_TEXT}</p>
                </div>
                </motion.div>
        </div>
  
}

export default About

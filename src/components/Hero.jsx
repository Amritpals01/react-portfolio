import { HERO_CONTENT } from "../constants"
import profilePic from '../assets/profile1.jpg';
import { motion } from "framer-motion"; 

const container = (delay) => ({
  hidden:{x:-100 , opacity:0},
  visible:{
    x:0,
    opacity:1,
    transition:{duration:0.5 , depaly:delay}
  }
})

const Hero = () => {
  return <div className="border-b border-neutral-900 pb-4 lg:mb-35">
    <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
        <div className="flex flex-col items-center lg:items-start">
            <motion.h1 
            variants={container(0)} 
            initial="hidden" 
            animate="visible"
             className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-6xl">Amritpal Singh</motion.h1>
            <motion.span variants={container(0.5)} 
            initial="hidden" 
            animate="visible" className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">Full Stack Developer</motion.span>
            <motion.p variants={container(1)} 
            initial="hidden" 
            animate="visible"className="my-1 max-w-xl py-5 font-light tracking-tighter">{HERO_CONTENT}

            </motion.p>
        </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
        <div className="flex justify-center w-50 h-65 ">
            <motion.img 
            initial={{x:100 , opacity:0}}
            animate={{x:0 , opacity:1}}
            transition={{duration:1, delay:0.5}}
             className="rounded-3xl border-opacity-0 " src={profilePic} alt="Amritpal" />
            </div>
            </div>
    </div>
  </div>
}

export default Hero

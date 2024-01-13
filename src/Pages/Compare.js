import React from 'react';
import { motion } from 'framer-motion';
import mobile from "../Assets/phone 1.png"


const Compare=()=>{
    return(
        <motion.div
        initial={{ y: 0 }}
        animate={{ opacity: 1, y: [0, -10, 0, 10, 0], transition: { duration: 1, repeat:Infinity } }}
        style={{
          position: 'relative',
          width: '200px',
          height: '200px',
        }}
      >
        <motion.img
          src={mobile}  // Replace with your actual image URL
          alt="Your Image Alt Text"
          style={{
            width: '100%',
            height: '100%',
            borderRadius: '10px',
          }}
        />
      </motion.div>
  );
}
export default Compare
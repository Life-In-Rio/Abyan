import React from "react";
import { motion } from "framer-motion";

function SAS() {
  return (
    <div>
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-3xl font-bold underline text-center text-blue-600 mb-10 mt-10 font-sans"
        whileHover={{ scale: 1.2, transition: { duration: 0.5 } }}
        hover={{ textShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)" }}
      >
        Saya sedang Mengerjakan ujian akhir atau SAS
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.2, transition: { duration: 0.5 } }}
        hover={{ textShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)" }}
        className="text-lg text-blue-600 text-center mb-10 font-bold font-sans"
      >
        Abyan Eshan Seorang pelajar SMA yang sedang merintis di bidang teknologi
        dan berusaha untuk membanggakan kedua orangtuanya.
      </motion.p>

      <motion.video
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1 }}
        width="640"
        height="360"
        controls
        className="mx-auto rounded"
      >
        <source src="/mk.mp4" type="video/mp4" />
      </motion.video>
      <motion.img
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
         whileHover={{ scale: 1.2, transition: { duration: 0.5 } }}
        src="/pg.JPG"
        alt="Foto"
        className="mx-auto rounded mt-10 mb-10"
        width="600"
        height="300"
      />
    </div>
  );
}

export default SAS;

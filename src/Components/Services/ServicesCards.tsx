"use client";

import { Categories } from "@/lib/ServicesList";
import React from "react";
import {
  TbBrandAdobe,
  TbDeviceMobileCheck,
  TbMessage2Heart,
  TbPencilBolt,
  TbVectorBezier,
  TbWorldCode,
} from "react-icons/tb";

import { motion } from "motion/react";

export default function ServicesCards() {
  return (
    <div className="grid md:grid-cols-2 gap-9 mt-8">
      {Categories.map((category, i) => (
        <motion.div
          initial={{ opacity: 0, translateY: 20 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: i * 0.2 }}
          key={category.id}
          className="services-card hover:scale-110"
        >
          {category.name === "Web Development" ? (
            <TbWorldCode className="text-4xl text-yellow-500 " />
          ) : category.name === "Social Media Design" ? (
            <TbMessage2Heart className="text-4xl text-yellow-500" />
          ) : category.name === "Graphic Design" ? (
            <TbVectorBezier className="text-4xl text-yellow-500" />
          ) : category.name === "UI/UX Design" ? (
            <TbDeviceMobileCheck className="text-4xl text-yellow-500" />
          ) : category.name === "Photoshop" ? (
            <TbBrandAdobe className="text-4xl text-yellow-500" />
          ) : category.name === "Logo Design" ? (
            <TbPencilBolt className="text-4xl text-yellow-500" />
          ) : null}
          <p>{category.desc}</p>
        </motion.div>
      ))}
    </div>
  );
}

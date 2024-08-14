import styles from "./project.module.css";
import cover from "../app/download.jpeg";
import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react";

const Slider = () => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          className={`rounded-3 ${styles.image}`}
          src={cover}
          alt="name"
          width={500}
          height={500}
        />
        <div className={styles.overlay}>
          <p className={styles.text}>
            VR training App for a <br /> manufacturing company
            <ArrowRight className="bg-[#011b3d] rounded-full my-5" size={40} weight="bold" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Slider;

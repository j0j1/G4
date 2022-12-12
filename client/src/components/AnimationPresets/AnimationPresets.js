import { useRef } from "react";
import {
    motion,
    useScroll,
    useInView,
    useSpring,
    useTransform,
    MotionValue
  } from "framer-motion";

  import "./animation.css"
  
export const Section = ({ children }) => {
    const ref = useRef(null);
    const isInView = useInView(ref);

    return (
        <span
        ref={ref}
        className="vertical"
        style={{
            transform: isInView ? "none": "tanslateY -200px",
            opacity: isInView ? 1 : 0,
            transition: "1.5s cubic-bezier(0.5, 0.3, 0.7, 1) 1s"
        }}
        >
        {children}
        </span>

    );
}

export const SectionLeft = ({ children }) => {
    const ref = useRef(null);
    const isInView = useInView(ref);

    return (
        <span
        ref={ref}
        className="left"
        style={{
            transform: isInView ? "none": "tanslateX -20px",
            transition: "1.5s cubic-bezier(0.5, 0.55, 0.1, 1) 1s"
        }}
        >
        {children}
        </span>

    );
}

export const SectionRight = ({ children }) => {
    const ref = useRef(null);
    const isInView = useInView(ref);

    return (
        <span
        ref={ref}
        className="right"
        style={{
            transform: isInView ? "none": "tanslateX +20px",
            transition: "all 0.9s cubic-bezier(0.5, 0.55, 0.55, 1) 1s"
        }}
        >
        {children}
        </span>

    );
}
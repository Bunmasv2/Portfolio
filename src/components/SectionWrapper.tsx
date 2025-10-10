import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionWrapperProps {
    id: string;
    children: ReactNode;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ id, children }) => {
    return (
        <section
            id={id}
            className="min-h-screen flex flex-col justify-center items-center py-16 px-6"
        >
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="max-w-5xl w-full text-center"
            >
                {children}
            </motion.div>
        </section>
    );
};

export default SectionWrapper;

import React from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { Coordinate } from "../App";

const CircleContainer = styled.div`
    position: absolute;
    width: 25px;
    height: 25px;
    border-width: 5px;
    border-radius: 50%;
    transform: translate(
        ${(props: { clientX: number; clientY: number }) =>
            `${props.clientX}px, ${props.clientY}px`}
    );
`;

function Circle({ circleCoordinate }: { circleCoordinate: Coordinate[] }) {
    return (
        <div>
            <AnimatePresence>
                {circleCoordinate.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ scale: 0.1 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0.1, opacity: 0 }}
                        transition={{ duration: 0.1, bounce: 50 }}
                    >
                        <CircleContainer
                            style={{
                                backgroundColor: `#${Math.floor(
                                    Math.random() * 16777215
                                ).toString(16)}`,
                            }}
                            {...item}
                        />
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
}

export default Circle;

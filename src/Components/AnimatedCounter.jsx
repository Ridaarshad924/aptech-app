import React, { useEffect, useState } from "react";

const AnimatedCounter = ({ target, duration = 2000, startAnimation }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!startAnimation) return; // Jab tak section visible nahi hua, kuch mat karo

        let start = 0;
        const increment = target / (duration / 30); // har 30ms par increment

        const counter = setInterval(() => {
            start += increment;
            if (start >= target) {
                start = target;
                clearInterval(counter);
            }
            setCount(Math.floor(start));
        }, 30);

        return () => clearInterval(counter);
    }, [startAnimation, target, duration]);

    return <div className="text-6xl md:text-7xl font-extrabold text-[#febe10]">{count}</div>;
};

export default AnimatedCounter;

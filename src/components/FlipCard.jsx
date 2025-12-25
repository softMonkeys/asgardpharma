import React, { useState, useEffect, useRef } from 'react';

const FlipCard = ({ icon, title, description, backTitle, backDescription, className = "h-80", peekOnScroll = false }) => {
    const [isPeeking, setIsPeeking] = useState(false);
    const cardRef = useRef(null);
    const hasPeeked = useRef(false);

    useEffect(() => {
        if (!peekOnScroll) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasPeeked.current) {
                    hasPeeked.current = true;
                    setIsPeeking(true);
                    setTimeout(() => setIsPeeking(false), 1000); // Reset after 1s
                }
            },
            { threshold: 0.5 }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => observer.disconnect();
    }, [peekOnScroll]);

    return (
        <div ref={cardRef} className={`group perspective-1000 w-full cursor-pointer flip-card-target ${className}`}>
            <div className={`relative w-full h-full transition-all duration-700 preserve-3d shadow-lg rounded-xl group-hover:rotate-y-180 ${isPeeking ? 'rotate-y-30' : ''}`}>

                {/* Front Side */}
                <div className="absolute inset-0 w-full h-full backface-hidden bg-white rounded-xl p-8 flex flex-col items-center justify-center text-center border border-black/5">
                    <div className="mb-6 text-accent">
                        {icon}
                    </div>
                    <h3 className="text-2xl font-bold text-text-main tracking-tight mb-4 uppercase">
                        {title}
                    </h3>
                    <p className="text-text-muted text-sm leading-relaxed">
                        {description}
                    </p>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-text-main rounded-xl p-8 flex flex-col items-center justify-center text-center">
                    <h3 className="text-2xl font-bold text-white tracking-tight mb-4 uppercase">
                        {backTitle || title}
                    </h3>
                    <p className="text-white/80 text-sm leading-relaxed">
                        {backDescription}
                    </p>
                    <div className="mt-6 w-12 h-1 bg-accent rounded-full"></div>
                </div>

            </div>
        </div>
    );
};

export default FlipCard;

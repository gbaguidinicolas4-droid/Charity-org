"use client";

import { useEffect, useState } from "react";

export default function Compt() {
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    const target = 36546841;
    const duration = 2500;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setAmount(Math.floor(target * easedProgress));

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <div className="text-center">
      <h2 className="text-[clamp(60px,10vw,150px)] font-black leading-none tracking-[-0.06em] text-green-500">
        ${amount.toLocaleString("en-US")}
      </h2>
      <p className="mt-5 text-[clamp(14px,1.5vw,20px)] text-gray-500">
        Raised in Donations
      </p>
    </div>
  );
}
import React from "react";
import type { WaveSeparatorProps } from "../data";

const WaveSeparator: React.FC<WaveSeparatorProps> = ({ flip = false, className = "" }) => (
 <div className={`wave-seperator relative w-full overflow-hidden leading-none ${className}`}>
  <div
    className="header-rainbow w-full h-[60px] md:h-[130px]" 
    style={{
      WebkitMaskImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120"><path fill="white" d="M0,64L48,53.3C96,43,192,21,288,16C384,11,480,21,576,42.7C672,64,768,96,864,106.7C960,117,1056,107,1152,90.7C1248,75,1344,53,1392,42.7L1440,32V120H0Z"/></svg>')`,
      WebkitMaskRepeat: 'no-repeat',
      WebkitMaskSize: 'cover',
      WebkitMaskPosition: 'top',
      maskImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120"><path fill="white" d="M0,64L48,53.3C96,43,192,21,288,16C384,11,480,21,576,42.7C672,64,768,96,864,106.7C960,117,1056,107,1152,90.7C1248,75,1344,53,1392,42.7L1440,32V120H0Z"/></svg>')`,
      maskRepeat: 'no-repeat',
      maskSize: 'cover',
      maskPosition: 'top',
      transform: flip ? 'scaleY(-1)' : 'none',
    }}
  />
</div>

);

export default WaveSeparator;

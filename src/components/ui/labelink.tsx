import type React from "react";
import type { LabelLinkProps } from "../../common/types";


const LabelLink: React.FC<LabelLinkProps> = ({ text, href, className = "" }) => {
    return (
      <a
        aria-label={text}
        className={`text-blue-500 underline font-semibold hover:text-blue-700 transition-colors duration-200 ${className}`}
        href={href}
        rel="noopener noreferrer"
        target="_blank"
      >
        {text}
      </a>
    );
  };
  
  export default LabelLink;
import React from "react";

interface IconProps {
  d: string;
  [key: string]: any;
}

interface AboutIconProps {
  icon: IconProps;
  size?: number;
  iconName: string;
}

const AboutIcon: React.FC<AboutIconProps> = ({ icon, size = 24, iconName }) => {
  return (
        <div className="mr-4 flex items-center space-x-2">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={size}
              height={size}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 flex-shrink-0 stroke-1 text-neutral-500 md:h-10 md:w-10"
            >
              <path {...icon} />
            </svg>
          </span>
          <span className="flex-shrink-0 text-sm font-semibold text-neutral-500">
            {iconName}
          </span>
        </div>
  );
};

export default AboutIcon;
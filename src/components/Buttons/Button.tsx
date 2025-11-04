import { link } from "fs/promises";
import React, { ButtonHTMLAttributes, ReactNode } from "react";
import { ChevronRight, ChevronDown, ArrowRightCircle, ArrowLeftCircle, ArrowLeftCircleIcon, ArrowRightCircleIcon } from "lucide-react"; 
import { Link } from "react-router-dom";


export enum ButtonColorVariant {
  primary = "primary-btn",
  secondary = "secondary-btn",
  transparentPrimary = "transparent-primary-btn",
  transparentSecondary = "transparent-secondary-btn",
  dark = "dark-btn",
  menu = "menu-btn",
}

export enum ButtonSizeVariant {
  big = "big-btn",
  long = 'long-btn',
  small = "small-btn",
}

export enum ButtonShapeVariant {
  circular = "circular-btn",
  default = ""
}

export enum ButtonChevronVariant {
  ChevronRight = "chevron-right",
  ChevronDown = "chevron-down",
  arrowRight = "arrow-right",
  arrowLeft = "arrow-left",
}

type ButtonProps = {
  variant?: "link"
  className?: string
  size: ButtonSizeVariant
  shape: ButtonShapeVariant
  colorVariant?: ButtonColorVariant
  content: string;
  chevronVariant?: ButtonChevronVariant;
  link?: string;
  separator?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>


export const Button:React.FC<ButtonProps> = ({ variant, className, size, shape, colorVariant, content, link, chevronVariant, separator, ...props }) => {
  const fontSize = shape == ButtonShapeVariant.circular ? 12 : 14;  
  const baseClass = `btn ${shape || ""} ${size || ''} ${colorVariant || ''}`;
  if(!className) className = '';

  let chevron:ReactNode = <></>;

  
  switch(chevronVariant) {
    case ButtonChevronVariant.arrowLeft:
      chevron = <ArrowLeftCircleIcon size={fontSize + 5} className="ml-1" fill={colorVariant === ButtonColorVariant.transparentSecondary ? "#17D982" : undefined} color={colorVariant == ButtonColorVariant.transparentSecondary ? "#FFFFFF" : undefined} />;
      break;
    case ButtonChevronVariant.arrowRight:
      chevron = <ArrowRightCircleIcon size={fontSize + 5} className="ml-1" fill={colorVariant === ButtonColorVariant.transparentSecondary ? "#17D982" : undefined} color={colorVariant == ButtonColorVariant.transparentSecondary ? "#FFFFFF" : undefined} />;
      break;
    case ButtonChevronVariant.ChevronDown:
      chevron = <ChevronDown size={fontSize} className="ml-1" />;
      break;
    case ButtonChevronVariant.ChevronRight:
      chevron = <ChevronRight size={fontSize} className="ml-1" />;
      break;
  }
  
  if(!!link) {
    return (
      <button className={`${baseClass} ${className || ''}`} {...props}>
        <Link to={link} className="inline-flex items-center">
        <span className={separator ? "border-r border-dashed border-r-[#E3E3E3] pr-2" : ""}>{content}</span>
        {chevron}
        </Link>
      </button>
    );
  }

  return (
    <button className={`${baseClass} ${className || ''}`} {...props}>
      
      <span className={separator ? "border-r border-dashed border-r-[#E3E3E3] pr-2" : ""}>{content}</span>
      {chevron}
    </button>
  )
}

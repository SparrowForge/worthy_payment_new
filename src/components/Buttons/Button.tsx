import { link } from "fs/promises";
import React, { ButtonHTMLAttributes, ReactNode } from "react";
import { ChevronLeft, ChevronRight, ChevronDown, ArrowRight, ArrowLeft } from "lucide-react"; 
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
} & ButtonHTMLAttributes<HTMLButtonElement>


type LinkButtonProps = ButtonProps & {
  to: string
}


export const Button:React.FC<ButtonProps> = ({ variant, className, size, shape, colorVariant, content, link, chevronVariant, ...props }) => {
  const fontSize = shape == ButtonShapeVariant.circular ? 12 : 14;  
  const baseClass = `btn ${shape || ""} ${size} ${colorVariant}`;

  let chevron:ReactNode = <></>;
  switch(chevronVariant) {
    case ButtonChevronVariant.arrowLeft:
      chevron = <ArrowLeft size={fontSize} className="ml-1" />;
      break;
    case ButtonChevronVariant.arrowRight:
      chevron = <ArrowRight size={fontSize} className="ml-1" />;
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
        {content}
        {chevron}
        </Link>
      </button>
    );
  }

  return (
    <button className={`${baseClass} ${className || ''}`} {...props}>
      {content}
      {chevron}
    </button>
  )
}

import React from 'react';
import { Button, ButtonChevronVariant, ButtonColorVariant, ButtonShapeVariant, ButtonSizeVariant } from '../Buttons/Button';

/**
 * Card: Two-column hero card based on Figma JSON (Frame 3938)
 * - Left: pill, heading, supporting copy, CTAs, small feature card
 * - Right: circular illustration placeholder with subtle accents
 *
 * Uses theme classes from input.css (layout-container, layout-two-columns, typography & colors)
 * and minimal Tailwind utilities where needed (halved px when using arbitrary values).
 */

export type CardProps = {
  className?: string;

  topButtonLink: string;
  topButtonText: string;
  
  subtitle: string;
  description: string;

  ctaLink: string;
  ctaText: string;

  seeAlsoLinks: { title: string; description: string; link: string }[];

  rightImageSrc: string;
};

const Card: React.FC<CardProps> = ({ className = '', topButtonLink, topButtonText, subtitle, description, ctaLink, ctaText, seeAlsoLinks, rightImageSrc }) => {
  return (
    <section className={["layout-container", className].join(' ')} aria-label="Accept payments hero">
      <div className="layout-two-columns items-center gap-[86px]">
        {/* Left column - Frame 166 */}
        <div className="flex flex-col gap-4">
          {/* Frame 46: Top section with pill, heading, and description */}
          <div className="flex flex-col gap-[17.5px] text text-left">
            {/* Frame 43: Pill + Heading */}
            <div className="flex flex-col gap-3">
              {/* Pill - Frame 37 */}
              <Button 
                shape={ButtonShapeVariant.circular}
                size={ButtonSizeVariant.long}
                colorVariant={ButtonColorVariant.transparentSecondary}
                content={topButtonText}
                chevronVariant={ButtonChevronVariant.arrowRight}
                className='border border-[#E3E3E3] my-auto m-0 mr-auto'
                separator={true}
              />

              {/* Heading */}
              <h2 className="font-subtitle font-heading-color">
                {subtitle}
              </h2>
            </div>

            {/* Supporting copy */}
            <p className="font-body-normal font-body-color mt-sm">
              {description}
            </p>
          </div>

          {/* CTA Button - Frame 3 */}
          <Button
            shape={ButtonShapeVariant.default}
            size={ButtonSizeVariant.long}
            colorVariant={ButtonColorVariant.primary}
            chevronVariant={ButtonChevronVariant.ChevronRight}
            content={ctaText}
            className='m-0 mr-auto'
          />

          {/* See Also Section - Frame 165 */}
          <div className="border border-[#F0F0F0] rounded-xl p-4 flex flex-col gap-4 text text-left" style={{ background: 'linear-gradient(to bottom, rgba(248,248,248,0.1), #F8F8F8)' }}>
            <h3 className="font-heading-color">See also</h3>
            
            {/* Frame 164: List of related items */}
            <div className="flex flex-col gap-3">
              {
                seeAlsoLinks.map((item, index) => (
                  <p key={index} className="font-body-normal font-heading-color">
                    <a href={item.link} className="font-bold hover:underline">{item.title}</a>{' '}
                    <span className="font-body-color">{item.description}</span>
                  </p>
                )) 
              }
            </div>
          </div>
        </div>

        {/* Right column: Illustration placeholder */}
        <div className="relative flex items-center justify-center min-h-[231px]">
          <img src={rightImageSrc} alt='Phone' className='' />
        </div>
      </div>
    </section>
  );
};

export default Card;

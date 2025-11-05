import React from 'react';
import { Button, ButtonChevronVariant, ButtonColorVariant, ButtonShapeVariant, ButtonSizeVariant } from '../Buttons/Button';

/**
 * Card1: Two-column hero card based on Figma JSON (Frame 3938)
 * - Left: pill, heading, supporting copy, CTAs, small feature card
 * - Right: circular illustration placeholder with subtle accents
 *
 * Uses theme classes from input.css (layout-container, layout-two-columns, typography & colors)
 * and minimal Tailwind utilities where needed (halved px when using arbitrary values).
 */

export type Card1Props = {
  className?: string;
};

const Card1: React.FC<Card1Props> = ({ className = '' }) => {
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
                content="Payments"
                chevronVariant={ButtonChevronVariant.arrowRight}
                className='border border-[#E3E3E3] my-auto ml-0 mr-auto'
              />

              {/* Heading */}
              <h2 className="font-subtitle font-heading-color">
                Accept and optimize payments, globally
              </h2>
            </div>

            {/* Supporting copy */}
            <p className="font-body-normal font-body-color mt-sm">
              Increase authorization rates, offer local payment methods to boost conversion, and reduce fraud using AI.
            </p>
          </div>

          {/* CTA Button - Frame 3 */}
          <Button
            shape={ButtonShapeVariant.default}
            size={ButtonSizeVariant.long}
            colorVariant={ButtonColorVariant.primary}
            chevronVariant={ButtonChevronVariant.arrowRight}
            content="Start with payments"
            className='my-auto ml-0 mr-auto'
          />

          {/* See Also Section - Frame 165 */}
          <div className="border border-[#F0F0F0] rounded-xl p-4 flex flex-col gap-4" style={{ background: 'linear-gradient(to bottom, rgba(248,248,248,0.1), #F8F8F8)' }}>
            <h3 className="font-body-medium font-heading-color">See also</h3>
            
            {/* Frame 164: List of related items */}
            <div className="flex flex-col gap-3">
              <p className="font-body-normal font-heading-color">
                <span className="font-bold">Tax</span>{' '}
                <span className="font-body-color">for automating tax registration, collection, & filing</span>
              </p>
              
              <p className="font-body-normal font-heading-color">
                <span className="font-bold">Radar</span>{' '}
                <span className="font-body-color">for Al-powered fraud protection</span>
              </p>
              
              <p className="font-body-normal font-heading-color">
                <span className="font-bold">Terminal</span>{' '}
                <span className="font-body-color">for custom in-person payments</span>
              </p>
            </div>
          </div>
        </div>

        {/* Right column: Illustration placeholder */}
        <div className="relative flex items-center justify-center min-h-[231px]">
          {/* Main circle */}
          <div className="relative h-[185px] w-[185px] rounded-full bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)] border border-[#ECECEC] overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,#F5FFF9,transparent_60%)]" />
          </div>

          {/* Corner accent badges (approximate to Frame 325/326/327/328) */}
          <div className="absolute -top-2.5 -left-2.5 h-[22px] w-[22px] rounded-md bg-white border border-[#EAEAEA] shadow-[0_2px_8px_rgba(0,0,0,0.08)] grid place-items-center text-[10px]">
            💳
          </div>
          <div className="absolute -top-2.5 -right-2.5 h-[22px] w-[22px] rounded-md bg-[#EAF7F0] grid place-items-center text-[10px]">
            🌍
          </div>
          <div className="absolute -bottom-2.5 -right-2.5 h-[22px] w-[22px] rounded-md bg-white border border-[#EAEAEA] shadow-[0_2px_8px_rgba(0,0,0,0.08)] grid place-items-center text-[10px]">
            🔒
          </div>
          <div className="absolute -bottom-2.5 -left-2.5 h-[22px] w-[22px] rounded-md bg-[#EAF7F0] grid place-items-center text-[10px]">
            ⚡
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card1;

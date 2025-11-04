import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button, ButtonChevronVariant, ButtonColorVariant, ButtonShapeVariant, ButtonSizeVariant } from '../Buttons/Button';

type IntegrationProps = {
  className?: string;
};

const Integration: React.FC<IntegrationProps> = ({ className = '' }) => {
  return (
    <section
      className={[
        'flex flex-col items-center',
        'gap-[18px]',
        'mx-auto max-w-[670px]',
        className,
      ].join(' ')}
      aria-label="Integration suite banner"
    >
      {/* Stack: pill + heading */}
      <div className="flex flex-col items-center gap-5 w-full mt-10">
        {/* Pill: Modular solutions */}
        <Button
          size={ButtonSizeVariant.long}
          colorVariant={ButtonColorVariant.transparentSecondary}
          shape={ButtonShapeVariant.circular}
          content="Modular solutions"
          chevronVariant={ButtonChevronVariant.arrowRight}
          aria-label="Explore modular solutions"
          className='border border-[#E3E3E3] text-[#222A31]'
          separator={true}
        />

        {/* Heading */}
        <span className="font-subtitle font-[600px]">
          A fully integrated suite of financial & payments products
        </span>
      </div>

      {/* Supporting description */}
      <p className="font-body-large font-body-color text-center gap-5">
        Reduce costs, grow revenue, and run your business more efficiently on a fully integrated, AI-powered platform.
      </p>
    </section>
  );
};

export default Integration;
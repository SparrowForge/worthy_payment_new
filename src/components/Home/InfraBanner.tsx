import React from 'react';
import { Button, ButtonChevronVariant, ButtonColorVariant, ButtonShapeVariant, ButtonSizeVariant } from '../Buttons/Button';

type HomeInfraBannerProps = {
  className?: string;
  onOpenAccount?: () => void;
  onContactSales?: () => void;
};


const HomeInfraBanner: React.FC<HomeInfraBannerProps> = ({
  className = '',
  onOpenAccount,
  onContactSales,
}) => {
  // Colors from Figma styles
  const headingColor = '#1E2315'; // "Heading font color" (approx from RGB)
  const bodyColor = '#424443'; // body text color

  return (
    <section
      className={[
        'flex flex-col items-center',
        // Frame 320 vertical spacing: 35px -> ~18px
        'gap-[18px]',
        // Constrain to ~Figma width (750px -> 375px)
        'mx-auto max-w-[670px]',
        className,
      ].join(' ')}
      aria-label="Financial infrastructure banner"
    >
      {/* Frame 319 */}
      <div className="flex flex-col items-center gap-10 w-full">
        <span
          className={[
            // 64px -> 32px, 70.4px -> 35.2px
            'font-subtitle font-[600px]',
          ].join(' ')}
          style={{ color: headingColor }}
        >
          Financial infrastructure to grow your revenue
        </span>

        <p
          className={[
            // theme-driven body typography and color
            'font-body-large font-body-color',
            // alignment
            'text-center',
          ].join(' ')}
        >
          Join the millions of companies that use Stripe to accept payments
          online and in person, embed financial services, power custom revenue
          models, and build a more profitable business.
        </p>
      </div>

      {/* Frame 12 (buttons row) */}
      <div className="flex items-center gap-10">
        {/* Primary CTA: Frame 3 */}
        <Button
          shape={ButtonShapeVariant.default}
          size={ButtonSizeVariant.long}
          colorVariant={ButtonColorVariant.primary}
          chevronVariant={ButtonChevronVariant.ChevronRight}
          content='Open an Account'
          className=''
        />

        {/* Secondary CTA: Frame 11 */}
        <Button 
            shape={ButtonShapeVariant.default}
            size={ButtonSizeVariant.long}
            colorVariant={ButtonColorVariant.transparentSecondary}
            chevronVariant={ButtonChevronVariant.ChevronRight}
            content='Contact Sales'
            className='border border-[#E3E3E3]'
        />
      </div>
    </section>
  );
};

export default HomeInfraBanner;
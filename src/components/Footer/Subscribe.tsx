import React from "react";
import {
  Button,
  ButtonChevronVariant,
  ButtonColorVariant,
  ButtonShapeVariant,
  ButtonSizeVariant
} from "../Buttons/Button";

const SocialIcon: React.FC<{
  ariaLabel: string;
  href?: string;
  children: React.ReactNode;
}> = ({ ariaLabel, href = "#", children }) => (
  <a
    aria-label={ariaLabel}
    href={href}
    className="w-[50px] h-[50px] rounded-lg bg-[#F8F8F8] flex items-center justify-center"
  >
    {children}
  </a>
);

function Subscribe() {
  return (
    <section className="layout-container mt-md">
      <div className="layout-content flex flex-col gap-4 max-w-sm">
        {/* Title (16px, weight ~500, heading color) */}
        <p className="font-body-base font-heading-color">
          Get the latest fintech insights
        </p>

        {/* CTA (primary + big by default per requirement) */}
        <div>
          <Button
            size={ButtonSizeVariant.small}
            shape={ButtonShapeVariant.default}
            colorVariant={ButtonColorVariant.primary}
            content="Subscribe to Newsletter"
            chevronVariant={ButtonChevronVariant.arrowRight}
            link="/newsletter"
            className="w-full flex justify-center"
          />
        </div>

        {/* Social icons row (50x50, rounded 8) */}
        <div className="flex items-center gap-3">
          <SocialIcon ariaLabel="LinkedIn">
            <img src="/svg/x.svg" alt="X" width={25} height={25} />
          </SocialIcon>
          <SocialIcon ariaLabel="Facebook">
            <img src="/svg/facebook.svg" alt="Facebook" width={25} height={25} />
          </SocialIcon>
          <SocialIcon ariaLabel="Instagram">
            <img src="/svg/instagram.svg" alt="Instagram" width={25} height={25} />
          </SocialIcon>
          <SocialIcon ariaLabel="Instagram">
            <img src="/svg/linkedin.svg" alt="Instagram" width={25} height={25} />
          </SocialIcon>
        </div>
      </div>
    </section>
  );
}

export default Subscribe;
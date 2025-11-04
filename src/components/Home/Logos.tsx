import './Logo.css';
interface LogoItem {
    src: string;
    alt: string;    
}
const logos: LogoItem[] = [
    { src: 'shopify.svg', alt: 'Shopify' },
    { src: 'amazon.svg', alt: 'Amazon' },
    { src: 'google.svg', alt: 'Google' },
    { src: 'woocommerce.svg', alt: 'WooCommerce' },
    { src: 'openai.svg', alt: 'OpenAI' },
    { src: 'airbnb.svg', alt: 'Airbnb' },
    { src: 'marriott.svg', alt: 'Marriott' },
    { src: 'anthropic.svg', alt: 'Anthropic' },
]

function Logos() {
    return (
        <div className="layout-four-columns mt-20">
            {logos.map((logo) => (
                <div key={logo.alt} className="logo px-10 py-10 pt-sm border border-[#E4E4E4]">
                    <img src={"/svg/" + logo.src} alt={logo.alt} className="inline-block max-w-full" />
                </div>
            ))}
        </div>
    );
}

export default Logos;
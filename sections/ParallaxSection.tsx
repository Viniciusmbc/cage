import { Picture, Source } from "apps/website/components/Picture.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

interface ParallaxImageProps {
  src: string | ImageWidget;
  title: string;
  subtitle?: string;
  textColor: string;
  href: string;
  ariaLabel: string;
}

function ParallaxImage({
  src = "https://res.cloudinary.com/deaejawfj/image/upload/v1699038180/DALL_E_2023-11-02_00.02.06_-_Photo_of_an_East_Asian_boy_visible_from_just_below_the_chin_with_arms_not_cropped_to_the_sides_wearing_a_black_t-shirt_with_a_colorful_print_of_the_dlt6zn.png",
  title = "TITULO",
  textColor = "#FFF", // valor padrão branco
  href = "#", // valor padrão, substitua pelo seu URL
  ariaLabel = "Link para mais informações", // valor padrão, substitua pelo seu texto
  subtitle = "SUBTITULO",
}: ParallaxImageProps) {
  return (
    <div className="relative w-full h-screen">
      <div
        className="absolute -z-20 inset-0 bg-cover bg-center  opacity-90"
        style={{
          backgroundImage: `url(${src})`,
          transform: "translateZ(-1px) scale(1.5)",
        }}
      >
        <a
          target="_blank"
          href={href}
          aria-label={ariaLabel}
          className="link cursor-pointer h-32 w-full block"
        >
          {/* Renderizando o título no meio da imagem */}
          <div className="absolute z-50 inset-0 flex justify-center items-center">
            <h2
              className="text-[6vw] -rotate-12 font-bold mix-blend-difference cursor-pointer"
              style={{
                color: textColor,
                textShadow: `
                  -1px -1px 0 #000,  
                   1px -1px 0 #000,
                  -1px 1px 0 #000,
                   1px 1px 0 #000
                `,
              }}
            >
              {title}
            </h2>
            <p>
              <span className="text-[2vw]  font-bold mix-blend-difference cursor-pointer">
                {subtitle}
              </span>
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}

interface Props {
  sections: Array<{
    src: string;
    ariaLabel: string;
    href: string;
    title: string;
    textColor: string;
    subtitle?: string;
  }>;
}

export default function ParallaxSection({
  sections = [
    {
      src: "https://media.istockphoto.com/id/1281067367/pt/foto/sale-tag-with-black-friday-written-on-yellow-background.jpg?s=1024x1024&w=is&k=20&c=Sypc5TfO84sHyOT8GwsN9Ijytn4XdD9yChvdagxzehk=",
      title: "Black Friday",
      textColor: "#FFF",
      ariaLabel: "Link para mais informações",
      href: "blackfriday",
      subtitle: "string",
    },
    {
      src: "https://res.cloudinary.com/deaejawfj/image/upload/v1699038178/C%C3%B3pia_de_DALL_E_2023-11-01_23.51.29_-_Photo_of_a_Black_man_shown_from_just_below_the_chin_with_arms_not_cropped_to_the_sides_wearing_a_black_t-shirt_with_a_colorful_print_inspired_by_the_bcyc9v.png",
      title: "Título padrão 2",
      textColor: "#000",
      ariaLabel: "Link para mais informações",
      href: "#",
      subtitle: "string",
    },

    // ...e assim por diante
  ],
}: Props) {
  return (
    <div className="overflow-hidden">
      {sections.map((section, index) => (
        <ParallaxImage
          key={index}
          src={section.src}
          title={section.title}
          textColor={section.textColor}
          href={section.href}
          ariaLabel={section.ariaLabel}
          subtitle={section.subtitle}
        />
      ))}
    </div>
  );
}

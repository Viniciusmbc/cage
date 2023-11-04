import { useState } from "preact/hooks";
import { Picture, Source } from "apps/website/components/Picture.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Action {
  href: string;
  label: string;
  title: string;
  subTitle: string;
}

export interface ImageBackgroundProps {
  desktop: ImageWidget;
  mobile: ImageWidget;
  lcp?: boolean;
  alt?: string;
  action?: Action;
}

export interface Props {
  images: ImageBackgroundProps[];
  preload?: boolean;
}
function ImageBackground({ desktop, mobile, lcp }: ImageBackgroundProps) {
  return (
    <Picture
      class="fixed top-0 left-0 w-screen h-screen object-cover z-0"
      preload={lcp}
    >
      <Source
        media="(min-width: 768px)"
        fetchPriority={lcp ? "high" : "auto"}
        src={mobile}
        width={120}
        height={120}
      />
      <Source
        media="(min-width: 768px)"
        fetchPriority={lcp ? "high" : "auto"}
        src={desktop}
        width={120}
        height={120}
      />
      <img
        class=" object-contain w-full h-full"
        loading={lcp ? "eager" : "lazy"}
        src={desktop}
        alt="Logo"
      />
    </Picture>
  );
}

function ChangeBackgroundImage(props: Props) {
  const [currentImage, setCurrentImage] = useSignal<ImageWidget | null>(null);

  const handleMouseEnter = (imageUrl: string) => {
    setCurrentImage(imageUrl);
  };

  const handleMouseLeave = () => {
    setCurrentImage(null);
  };

  return (
    <div class="w-screen h-screen overflow-hidden">
      {/* Background image */}
      {currentImage && (
        <ImageBackground desktop={currentImage} mobile={currentImage} />
      )}

      {/* Rest of your content */}
      <ul className="relative z-10">
        {/* Your grid and other content here */}
        {props.images?.map((image, index) => (
          <li key={index} className="group">
            {/* ... */}
            <a
              href={image.action?.href}
              onMouseEnter={() => handleMouseEnter(image.desktop)}
              onMouseLeave={handleMouseLeave}
              class="text-[6vw] text-white/20 hover:text-white font-semibold overflow-visible -rotate-12 pointer-events-auto"
            >
              {image.action?.label}
            </a>
            {/* ... */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ChangeBackgroundImage;

function useSignal<T>(arg0: null): [any, any] {
  throw new Error("Function not implemented.");
}

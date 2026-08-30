import Image from "next/image";
import type { Photo as PhotoData } from "@/lib/car";

type Props = {
  photo: PhotoData;
  priority?: boolean;
  sizes?: string;
  caption?: boolean;
  className?: string;
};

export function Photo({
  photo,
  priority,
  sizes = "(min-width: 1024px) 720px, 100vw",
  caption = true,
  className = "",
}: Props) {
  return (
    <figure className={`group ${className}`}>
      <div
        className="relative overflow-hidden border border-rule bg-steel"
        style={{ aspectRatio: photo.aspect }}
      >
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      </div>
      {caption ? (
        <figcaption className="mt-2 flex gap-3 text-[11px] leading-snug text-muted">
          <span className="shrink-0 tracking-[0.16em] text-red uppercase">
            {photo.id}
          </span>
          <span>{photo.caption}</span>
        </figcaption>
      ) : null}
    </figure>
  );
}

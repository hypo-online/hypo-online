import Image from "next/image";

/** Homepage illustration — replaces the old semaphore-style mock card. */
export function HeroGraphic() {
  return (
    <div className="card-surface overflow-hidden p-3 sm:p-5">
      <figure className="relative mx-auto aspect-[5/4] w-full max-w-xl">
        <Image
          src="/images/home-hero-collaboration.png"
          alt=""
          fill
          className="object-contain object-bottom"
          sizes="(max-width: 640px) calc(100vw - 2.5rem), 36rem"
          draggable={false}
          priority={false}
        />
      </figure>
    </div>
  );
}

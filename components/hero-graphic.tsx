import Image from "next/image";

/** Homepage illustration — replaces the old semaphore-style mock card. */
export function HeroGraphic() {
  return (
    <div className="card-surface overflow-hidden p-3 sm:p-5">
      <figure className="relative mx-auto aspect-[5/4] w-full max-w-xl overflow-hidden rounded-xl lg:max-w-3xl xl:max-w-4xl">
        <Image
          src="/images/home-hero-collaboration.png"
          alt=""
          fill
          className="home-hero-illustration object-contain object-bottom"
          sizes="(max-width: 640px) calc(100vw - 2.5rem), (max-width: 1024px) 36rem, (max-width: 1280px) 48rem, 56rem"
          draggable={false}
          priority={false}
        />
        <div className="home-hero-illustration-tint" aria-hidden />
      </figure>
    </div>
  );
}

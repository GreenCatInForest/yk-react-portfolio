import imageSrc from "../assets/images/lucas-george-wendt-8ZGgg6rhzxs-unsplash.jpg";

export const Banner = () => {
  return (
    <div className=" w-full">
      <img
        title="banner"
        src={imageSrc}
        alt="large banner"
        className="object-cover object-center bg-emerald-600 w-full h-60"
      />
    </div>
  );
};

const logos = [
    "/logos/netflix.png",
    "/logos/3m.png",
    "/logos/asahilinux.png",
    "/logos/siemens.png",
    "/logos/blackberry.png",
    "/logos/man.png"
]


const LogoMarquee = () => {
  return (
    <div className="p-16 bg-gradient-to-br from-gray-100 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex flex-col items-center justify-center">
  <h2 className="text-2xl font-semibold mb-6 text-center text-gray-700 dark:text-white">Companies Who Trust Us</h2> 
  <div className="overflow-hidden w-full flex justify-center">
    <div className="animate-marquee flex space-x-12">
      {logos.map((logo, index) => (
        <img
          key={index}
          src={logo}
          alt="Brand logo"
          className="h-13 w-auto grayscale hover:grayscale-0 transition-all duration-300 dark:invert"
        />
      ))}
    </div>
  </div>
</div>
  );
};
export default LogoMarquee
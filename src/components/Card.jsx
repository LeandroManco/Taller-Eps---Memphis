export default function Card({
  bgColor = "bg-[#FFFDF5]",
  textColor = "text-black",
  shadow = "shadow-[6px_6px_0px_0px_#000]",
  className = "",
  children,
}) {
  return (
    <article
      className={`${bgColor} ${textColor} border-4 border-black ${shadow} ${className}`}
    >
      {children}
    </article>
  );
}
import placeHolder from "../assets/no-image-placeholder.webp";

const getCropedImageUrl = (
  url: string,
  width: number,
  height: number
): string => {
  if (!url) return placeHolder;
  const target = "media/";
  const index = url.indexOf(target) + target.length;

  return `${url.slice(0, index)}crop/${width}/${height}/${url.slice(index)}`;
};

export default getCropedImageUrl;

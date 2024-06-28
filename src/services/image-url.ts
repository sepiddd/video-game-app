const getCropedImageUrl = (
  url: string,
  width: number,
  height: number
): string => {
  const target = "media/";
  const index = url.indexOf(target) + target.length;

  return `${url.slice(0, index)}crop/${width}/${height}/${url.slice(index)}`;
};

export default getCropedImageUrl;

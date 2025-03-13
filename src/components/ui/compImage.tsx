import type { CenteredImageProps } from "../../common/types";


const CompImage: React.FC<CenteredImageProps> = ({ src, alt = "Imagen", width = "w-50", height = "h-50", onclick}) => {
  return (
    <div className="flex justify-center items-center">
      <img alt={alt} className={`${width} ${height} object-cover rounded-lg shadow-lg`} src={src} onClick={onclick}/>
    </div>
  );
};

export default CompImage;

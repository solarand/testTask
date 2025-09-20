import { useEffect, useState } from "react";
import type Image from "../../types/schema";
import getGallery from "../../services/service";
import ImageCard from "../card";

const MainContent = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const imagesData = await getGallery.getImages();
        setImages(imagesData.data);
      } catch (error) {
        console.error("Ошибка загрузки:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  if (loading) return <div>Загрузка...</div>;

  return (
    <main className="mt-[46px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pl-4 pr-4 ">
      {images.map((image) => (
        <ImageCard id={image.id} img={image.image} key={image.id} />
      ))}
    </main>
  );
};

export default MainContent;

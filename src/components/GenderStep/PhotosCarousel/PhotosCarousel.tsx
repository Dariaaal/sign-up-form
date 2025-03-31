import styles from "./PhotosCarousel.module.scss";

const images = [
  "photo1.png",
  "photo2.png",
  "photo3.png",
  "photo4.png",
  "photo5.png",
];

const PhotosCarousel = () => {
  return (
    <div className={styles["carousel-container"]}>
      <ul className={styles["carousel"]}>
        {images.map((image, index) => (
          <li key={index} className={styles["carousel-item"]}>
            <img src={image} alt={`carousel-item-${index}`} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PhotosCarousel;

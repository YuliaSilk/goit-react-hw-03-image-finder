import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";

export const ImageGallery = ({ images, onSelectedImg, toOpenModal }) => {
    return (
        <ul>
            {images.map(({ id, webformatURL, tags, largeImageURL }) => {
                return (
                    <ImageGalleryItem
                    key={id}
                    src={webformatURL}
                    tags={tags}
                    largeImageURL={largeImageURL}
                    onSelectedImg={onSelectedImg}
                    toOpenModal={toOpenModal}
                    />
                );
            })}
        </ul>
    )
}

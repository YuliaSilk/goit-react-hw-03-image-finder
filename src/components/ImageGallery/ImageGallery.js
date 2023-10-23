import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import { ImageGalleryStyle } from "./ImageGallery.Styled";

export const ImageGallery = ({ images, onSelectedImg, toOpenModal }) => {
    return (
        <ImageGalleryStyle>
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
        </ImageGalleryStyle>
    )
}

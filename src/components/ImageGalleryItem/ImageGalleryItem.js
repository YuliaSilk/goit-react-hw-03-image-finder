export const ImageGalleryItem = ({ src, onSelectImg, toOpenModal, tags, largeImageURL }) => {
    return (
        <div onClick={toOpenModal}>
<image src={src} alt={tags} onClick={() => onSelectImg(largeImageURL, tags)}/>
        </div>
    )
}

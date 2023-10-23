import { ModalImg } from "components/Modal/Modal";
import { Component } from "react";
import { ImageGalleryItemImg, ImageGalleryLi } from "./ImageGalleryItem.Styled";


export class ImageGalleryItem extends Component {
    state ={
        modalIsOpen: false
    }
    openModal = () => {
        this.setState({ modalIsOpen: true });
    }
   
    closeModal = () => {
        this.setState({ modalIsOpen: false });
    }

    onSelectImg = (largeImageURL, tags) => {
        this.setState({
          largeImageURL: largeImageURL,
          tags: tags,
        });
      };
    render() {
        const { src, largeImageURL, tags, } = this.props;
        const { modalIsOpen } = this.state;

        return (
            <ImageGalleryLi onClick={this.openModal}>
            <ImageGalleryItemImg src={src} alt={tags} />
            <ModalImg src={largeImageURL} tags={tags} modalIsOpen={modalIsOpen} closeModal={this.closeModal} />
            </ImageGalleryLi>
            )
    }
  
}


import { ModalImg } from "components/Modal/Modal";
import { Component } from "react";


export class ImageGalleryItem extends Component {
    state ={
        modalIsOpen: false
    }
    openModal = () => {
        this.state({ modalIsOpen: true});
    }

    closeModal = () => {
        this.state({ modalIsOpen: false});
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
            <li onClick={this.openModal}>
<img src={src} alt={tags} />
<ModalImg src={largeImageURL} tags={tags} modalIsOpen={modalIsOpen} closeModal={this.closeModal}/>
            </li>
            )
    }
  
}


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
        const { src, largeImageURL, tags, onSelectImg } = this.props;
        const { modalIsOpen } = this.state;

        return (
            <li>
<img src={src} alt={tags} onClick={() => onSelectImg(largeImageURL, tags)}/>
<ModalImg src={largeImageURL} tags={tags} modalIsOpen={modalIsOpen} closeModal={this.closeModal}/>
            </li>
            )
    }
  
}



// export default class ImageGalleryItem extends Component {
//   
//     toggleModal = () => {
//       this.setState(prevState => ({ modalIsOpen: !prevState.modalIsOpen }));
//     }
  

//     render() {
//       const { src, largeSrc, tags } = this.props;
//       const { modalIsOpen } = this.state;
  
//       return (
//         <>
//           <Image onClick={this.toggleModal} src={src} alt={tags} />
//           <ModalImage src={largeSrc} tags={tags} modalIsOpen={modalIsOpen} closeModal={this.closeModal} />
//         </>
//       )
//     }
//   }

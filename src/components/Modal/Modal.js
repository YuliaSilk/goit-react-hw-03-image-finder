import { Component } from "react";
import Modal from 'react-modal';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  Modal.setAppElement('#root');


export class ModalWindow extends Component {
render() {
    const { largeImageURL, tags, toCloseModal, isModalOpen } = this.props
    return (
        <div onClick={toCloseModal}>
            <Modal
            isOpen={isModalOpen}
            onRequestClose={toCloseModal}
            style={customStyles} 
            contentLabel="Example Modal"   
            >
                <div>
                    <image src={largeImageURL} alt={tags}/>
                </div>
            </Modal>
        </div>
    )
}
}

// import { Component } from "react";
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


export const ModalImg = ({ src, tags, modalIsOpen, closeModal }) => {

    // const { largeImageURL, tags, closeModal, isModalOpen } = this.props
    return (
        <div onClick={closeModal}>
            <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles} 
            contentLabel="Example Modal"   
            >
               
                    <p>modal</p>
                    <img src={src} alt={tags}/>
               
            </Modal>
        </div>
    )
}


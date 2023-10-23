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
  return (
    <div>
    <Modal
        isOpen={modalIsOpen}
      style={customStyles}
      onRequestClose={closeModal}
      >
      <img src={src} alt={tags} width="800"/>
    </Modal>
    </div>
  )
}


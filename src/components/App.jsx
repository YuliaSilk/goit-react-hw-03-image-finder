import React, { Component } from "react";
// import { GlobalStyle } from './GlobalStyles'
import { getImage } from './api';
// import Notiflix from "notiflix";
import  toast from 'react-hot-toast';
import { SearchBar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Loader } from "./Loader/Loader";
import { LoadMoreBtn } from "./Button/Button";
// import { ModalWindow } from "./Modal/Modal";

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    currentPage: 0,
    totalPage: 0,
    isLoading: false,
    isModalOpen: false,
    error: false,
    largeImageURL: null,
    tags: null,
  }


onSubmitForm = value => {
  this.setState({
    query: value,
    error: false,
    page: 1,
    images: [],
  });
};

toLoadMore = () => {
  this.setState(prevState => ({
    page: prevState.page + 1,
  }));
};
componentDidUpdate(_, prevState) {
// console.log('prevState', prevState);
// console.log('this.state', this.state);

  if (prevState.query !== this.state.query || 
    prevState.page !== this.state.page) {
      this.fetchImages()
      }
 
}

fetchImages = async() => {
  try {
    this.setState({ isLoading: true });
    const data = await getImage(this.state.query, this.state.page);
    toast.success('Great!');
    this.setState(prev => (
      {images: [...prev.images, ...data.hits],
      totalPage: (Math.ceil(data.totalHits / 12)),}
    ));
} catch (error) {
  toast.error('Ooops! Error!');
}
finally {
  this.setState({ isLoading: false });
}
}
// onSelectImg = (largeImageURL, tags) => {
//   this.setState({
//     largeImageURL: largeImageURL,
//     tags: tags,
//   });
// };

// openModal = () => {
//   this.setState({ modalIsOpen: true });
// };
// closeModal = () => {
//   this.setState({ 
//     modalIsOpen: false, 
//     // largeImageURL: null, 
//     // tags: null, 
//   });
// };

  render () {
  // const { img, isLoading, error, page, totalPage } = this.state;
   console.log(this.state)

  return (
    <div>
    <SearchBar onSubmitForm={this.onSubmitForm} ></SearchBar>
    {this.state.images.length > 0 && (
      <ImageGallery images={this.state.images}
      onSelectImg={this.onSelectImg}
      openModal={this.openModal}/>
    )}

    {this.state.isLoading && <Loader/>}
    {this.state.images.length > 0 && this.state.page !== this.state.totalPage && 
      (<LoadMoreBtn onClick={this.toLoadMore}/>)}
    </div>
    )
  }

}



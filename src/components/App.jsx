import React, { Component } from "react";
import { getImage } from './api';
// import Notiflix from "notiflix";
import  toast, { Toaster } from 'react-hot-toast';
import { SearchBar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Loader } from "./Loader/Loader";
import { LoadMoreBtn } from "./Button/Button";
import { ModalWindow } from "./Modal/Modal";

export class App extends Component {
  state = {
    query: '',
    images: [],
    searchValue: '',
    page: 1,
    currentPage: 0,
    totalPage: 0,
    isLoading: false,
    isModalOpen: false,
    error: false,
    largeImageURL: null,
    tags: null,
  }

// onSubmitForm = value => {
//   this.setState({query: value });
//   if (this.state.query === value) {
//     return;
//   } else {
//     this.setState ({
//       images: [],
//       page: 1,
//     })
//   }
// };
onSubmitForm = value => {
  this.setState({
    ...this.state(),
    searchValue: value,
  });
};

toLoadMore = () => {
  this.setState(prevState => ({
    page: prevState.page + 1,
  }));
};

async componentDidUpdate(_, prevState) {
  if (prevState.query !== this.state.query || 
      prevState.page !== this.state.page) {
        try {
            this.setState({ loading: true, error: false });
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
          this.setState({ loading: false });
        }
     }
}

onSelectImg = (largeImageURL, tags) => {
  this.setState({
    largeImageURL: largeImageURL,
    tags: tags,
  });
};

toOpenModal = () => {
  this.setState({ isModalOpen: true });
};
toCloseModal = () => {
  this.setState({ 
    isModalOpen: false, 
    largeImageURL: null, 
    tags: null, 
  });
};

  render () {
  // const { img, isLoading, error, page, totalPage } = this.state;
   console.log(this.state)

  return (
    <div>
    <SearchBar onSubmit={this.onSubmit} ></SearchBar>
    {this.state.images.length > 0 && (
      <ImageGallery images={this.state.images}
      onSelectImg={this.onSelectImg}
      toOpenModal={this.toOpenModal}/>
    )}
    <Toaster/>
    {this.state.largeImageURL !== null && (<ModalWindow isModalOpen={this.state.isModalOpen}
      closeModal={this.toCloseModal}
      largeImageURL={this.state.largeImageURL}
      tags={this.state.tags}/>)}
    {this.state.isLoading && <Loader/>}
    {/* {this.state.images.length > 0 && this.state.page !== this.state.totalPage && 
      (<LoadMoreBtn onClick={this.toLoadMore}/>)} */}
    <LoadMoreBtn/>
    </div>
    )
  }

}



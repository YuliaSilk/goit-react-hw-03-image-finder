import React, { Component } from "react";
import { getImage } from './api';
import { SearchBar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Loader } from "./Loader/Loader";
import { LoadMoreBtn } from "./Button/Button";
import { Layout } from "./layout";
import toast, { Toaster } from "react-hot-toast";

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
  render () {
   console.log(this.state)

  return (
    <Layout>
    <SearchBar onSubmitForm={this.onSubmitForm} ></SearchBar>
    {this.state.isLoading && <Loader/>}
    {this.state.error && <p>"Whooops! Please reload this page!"</p>}
    {this.state.images.length > 0 && (
      <ImageGallery images={this.state.images}/>
    )}
    {this.state.images.length > 0 && this.state.page !== this.state.totalPage && 
      (<LoadMoreBtn onClick={this.toLoadMore}/>)}
    <Toaster position="top-right"/>
    </Layout>
    )
  }

}



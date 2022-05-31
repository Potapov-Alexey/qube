import React from "react";
import ImageWrapper from "../Image/Image-wrapper";
import { useStore } from "../../store/store";
import './style.css';
import { observer } from 'mobx-react-lite'

const Main = function () {
    const {searchStore} = useStore();
    
    return (
        <main className='main-content'>
          { searchStore && searchStore.movies && searchStore.movies.length ? 
          searchStore.movies.filter(el => el.s && el.i).map(movie => {
              return <ImageWrapper key={movie.id} starring={movie.s} movieName={movie.l} image={movie.i} year={movie.y}></ImageWrapper>}) : 
              <div className="loading">Loading...</div> 
            }
        </main>
    )
}

export default observer(Main);
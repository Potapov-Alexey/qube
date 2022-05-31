import React, {useEffect, useRef} from "react";
import './style.css';
import { useStore } from "../../store/store";

function Search () {
    const {searchStore} = useStore();
    const inputRef = useRef(null);
    
    useEffect(() => {
        inputRef.current.focus();
    }, [])
        
    const getInputValue = (event) => {
        searchStore.setSearch(event.target.value)
    }

    const search = () => {
        searchStore.loadMovies()
    }
    
    return (
        <div className="search-wrapper">
            <input ref={inputRef} onChange={getInputValue} className="search" placeholder="search movie here"></input>
            <button className="btn" onClick={search}>Search</button>
        </div>
    );
}

export default Search;
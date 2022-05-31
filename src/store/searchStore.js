import { makeAutoObservable, runInAction } from "mobx";
import axios from "axios";

export default class SearchStore {
    searchResults = [];
    movies = [];
    search = '';
    searchHistory = [];
    loading = true;
    searchOptions = {
        method: 'GET',
        url: 'https://online-movie-database.p.rapidapi.com/auto-complete',
        params: {q: 'game of tr'},
        headers: {
          'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com',
          'X-RapidAPI-Key': 'e2ff326f35msh074bb74305650abp12c558jsnc56bd130e20a'
        }
    };
    page = 0;

    constructor() {
        makeAutoObservable(this)
    }

    setSearch = (val) => {
        this.search = val;
    }

    loadDefaultMovies = () => {
        axios.request(this.searchOptions).then((response) => {
            runInAction(() => {
                this.movies = response.data.d;
                this.loadingMovies = false;
                this.searchHistory.push(response.data.d);
            })
        }).catch((error) => {
            console.error(error);
            runInAction(() => {
                this.loadingMovies = false;
            })
        });
    }

    loadMovies = () => {
        this.searchOptions = {...this.searchOptions, params: {q: `${this.search}`}}
        this.loadDefaultMovies();
    }

    getSearchHistory = () => {
        return this.searchHistory;
    }
}

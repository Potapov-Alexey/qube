import { createContext, useContext } from "react";
import SearchStore from "./searchStore.js";

export const store = {
    searchStore: new SearchStore()
}

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext);
}
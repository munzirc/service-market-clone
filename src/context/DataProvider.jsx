import { createContext, useState } from "react";

export const DataContext = createContext(null);

const DataProvider = ({children}) => {

    const [searchBar, setSearchBar] = useState(false);
    const [location, setLocation] = useState('Dubai');
    const [index, setIndex] = useState(0);

    return(
        <DataContext.Provider value = {{
            searchBar,
            setSearchBar,
            location,
            setLocation,
            index,
            setIndex
        }}>
            { children }
        </DataContext.Provider>
    )
}

export default DataProvider;
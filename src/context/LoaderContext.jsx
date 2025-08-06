 import { createContext, useState } from "react";

export const LoaderContext = createContext();

export function LoaderProvider({ children }) {
    const [loading, setLoading] = useState(false);

    const showLoader = () => setLoading(true);

    //timeout used to simulate a delay
    const hideLoader = () => {
    setTimeout(() => {
        setLoading(false);
    }, 1500);
    };

    return (
    <LoaderContext.Provider value={{ loading, showLoader, hideLoader }}>
        {children}
    </LoaderContext.Provider>
    );
}

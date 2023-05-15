import {createContext} from "react";

const defaultValue = {}
export const DataContext = createContext(defaultValue);

/**
 * Kode di atas kita menggunakan createContext() dari React untuk membuat context baru yang disebut DataContext.
 * Context ini akan memiliki nilai default defaultValue jika tidak ada provider di atas Consumer yang terkait dengan context DataContext.
 */


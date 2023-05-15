import {ServiceContext} from "./ServiceContext";

export function ServiceContextProvider({children, ...services}) {
  return (
    <ServiceContext.Provider value={services}>
      {children}
    </ServiceContext.Provider>
  )
}
import {ServiceContext} from "./ServiceContext";
import {DataContext} from "./DataContext";
import {CombineContext} from "./CombineContext";

const CombineContextProvider = props => {
  return (
    <ServiceContext.Consumer>
      {serviceCtx => (
        <DataContext.Consumer>
          {dataCtx => (
            <CombineContext.Provider value={{serviceCtx, dataCtx}}>
              {props.children}
            </CombineContext.Provider>
          )}
        </DataContext.Consumer>
      )}
    </ServiceContext.Consumer>
  )
}

export default CombineContextProvider;

/**
 * Tujuan ini dibuat untuk memecah nested consumer pada View contohnya pada project kita adalah (LoginView.js)
 */
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
 *
 * Permasalahan yang timbul adalah, bagaimana jika beberapa component ingin mengakses combine context yang sama ?
 * Yang terjadi adalah lihat pada penerapan combine context (pada project ini di file (LayoutMain.jsx)
 */
import {DataContext} from "../context/DataContext";
import {ServiceContext} from "../context/ServiceContext";

const WithCombineContext = (WrappedComponent) => props => (
  <ServiceContext.Consumer>
    {serviceCtx => (
      <DataContext.Consumer>
        {dataCtx => (
          <WrappedComponent serviceCtx={serviceCtx} dataCtx={dataCtx} {...props}/>
        )}
      </DataContext.Consumer>
    )}
  </ServiceContext.Consumer>
)

export default WithCombineContext;

/**
 * Kita buatkan hirarki compoenent tertinggi (ini yang akan diterapkan sebagai HOC)
 */
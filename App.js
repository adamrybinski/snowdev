import React, {useEffect, useState} from "./_snowpack/pkg/react.js";
import Example from "./Example.js";
import {QueryClient, QueryClientProvider} from "./_snowpack/pkg/react-query.js";
const queryClient = new QueryClient();
function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1e3);
    return () => clearTimeout(timer);
  }, [count, setCount]);
  return /* @__PURE__ */ React.createElement(QueryClientProvider, {
    client: queryClient
  }, /* @__PURE__ */ React.createElement("p", null, "Page has been open for ", /* @__PURE__ */ React.createElement("code", null, count), " seconds."), /* @__PURE__ */ React.createElement(Example, null));
}
export default App;

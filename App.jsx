import React, { useEffect, useState } from 'react';
import Example from './Example';
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000);
    return () => clearTimeout(timer);
  }, [count, setCount]);
  return (
    <QueryClientProvider client={queryClient}>
      <p>
        Page has been open for <code>{count}</code> seconds.
      </p>
      <Example />
    </QueryClientProvider>
  );
}

export default App;
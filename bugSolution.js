```javascript
import { BrowserRouter, Routes, Route, useSearchParams } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* ... other routes ... */}
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q');

  // ... rest of your component using the 'query' variable ...
  return (
    <div>
      Home: {query}
    </div>
  );
}

function About() {
  return <div>About</div>;
}

export default App;
```
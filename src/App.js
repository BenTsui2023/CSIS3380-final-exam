import './css/styles.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookList from "./components/BookList";
import CreateBook from './components/CreateBook';

function App() {
  return (
      <>
      <BrowserRouter>
      <Routes>
          <Route path="/" exact element={<BookList />} />
          <Route path="/create-book" element={<CreateBook />} />
        </Routes>
      </BrowserRouter>
      </>
  );
}

export default App;

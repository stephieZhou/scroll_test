import './App.css';
import InfiniteScroll from "react-infinite-scroll-component"
import { useState } from "react";

function App() {
  const [dataSource, setDataSource] = useState(Array.from({length:20}))
  return (
    <div className="App">
    <InfiniteScroll dataLength={dataSource.length} next={fetchMoreData}>
      {dataSource.map((item, index)=> {
        return <div>This is a div #{index + 1} inside InfiniteScroll </div>
      })}
    </InfiniteScroll>
    </div>
  );
}

export default App;

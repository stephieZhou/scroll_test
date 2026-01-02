import './App.css';
import InfiniteScroll from "react-infinite-scroll-component"
import { useState } from "react";

function App() {
  const [dataSource, setDataSource] = useState(Array.from({length:20}))
  const [hasMore,setHasMore] = useState(true)
  const fetchMoreData=()=> {
    if(dataSource.length < 40) {
      //MAKING API CALL
      setTimeout(() => {
        setDataSource(dataSource.concat(Array.from({length:20})))
      }, 500)
    } else {
      setHasMore(false)
    }
    
  }
  return (
    <div className="App">
    <h3>Title: <b>Infinite Scroll</b></h3>
    <div id ="parentScrollDiv" style={{height:500, overflow:'auto'}}>
    <InfiniteScroll 
      dataLength={dataSource.length} 
      next={fetchMoreData} 
      hasMore={hasMore}
      loader={<p>Loading...</p>}
      endMessage={<p>All Done!</p>}
      scrollableTarget="parentScrollDiv"
      >
      {dataSource.map((item, index)=> {
        return <div className="item">This is a div #{index + 1} inside InfiniteScroll </div>
      })}
    </InfiniteScroll>
    </div>
    </div>
  );
}

export default App;

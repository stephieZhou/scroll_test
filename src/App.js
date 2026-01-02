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
    <h2>Wait! I think you forgot something.</h2>
    <div id ="parentScrollDiv" style={{height:500, overflow:'auto'}}>
    <InfiniteScroll 
      dataLength={dataSource.length} 
      next={fetchMoreData} 
      hasMore={hasMore}
      loader={<p>Loading...</p>}
      endMessage={<p>All Ready to Go!</p>}
      scrollableTarget="parentScrollDiv"
      >
      {dataSource.map((item, index)=> {
        return <div className="item"> [ ] Did you forget your {index + 1}? </div>
      })}
    </InfiniteScroll>
    </div>
    </div>
  );
}

export default App;

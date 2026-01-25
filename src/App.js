import './App.css';
import React from 'react';
import InfiniteScroll from "react-infinite-scroll-component"
import { useState } from "react";

function FadeInSection(props) {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);
  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}


function App() {
  const [dataSource, setDataSource] = useState(Array.from({length:40}))
  const [hasMore,setHasMore] = useState(true)
  const fetchMoreData=()=> {
    if(dataSource.length < 40) {
      //MAKING API CALL
      setTimeout(() => {
        setDataSource(dataSource.concat(Array.from({length:40})))
      }, 500)
    } else {
      setHasMore(false)
    }
    
  }
  return (
    <div className="App">
    <h2>Wait! I think you forgot something.</h2>
    <div id ="parentScrollDiv"style={
      {flex:1}}>
    <InfiniteScroll 
      dataLength={dataSource.length} 
      next={fetchMoreData} 
      hasMore={hasMore}
      loader={<p>Loading...</p>}
      endMessage={<p>All Ready to Go!</p>}
      scrollableTarget="parentScrollDiv"
      >
      {dataSource.map((item, index)=> {
        return <FadeInSection>
          <div className="item"> 
            <h2>Did you forget your {index + 1}?</h2>
          </div>
          </FadeInSection>
      })}
    </InfiniteScroll>
    </div>
    </div>
  );
}

export default App;



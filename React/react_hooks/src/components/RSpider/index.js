import React, { useState, useEffect } from "react";
let timer;
export default function Index({
  autoplay = true,
  deployTime = 1000,
  initIdx = 0,
  children,
}) {
  const len = children.length;
  let [currentIdx, setCurrentIdx] = useState(initIdx);
  const [child, setChild] = useState(children[0]);

  useEffect(() => {
    autoplay&&run(initIdx);
    return () => {
      stop();
    };
  }, []);

  // run 开始
  function run(curIdx) {
    let newIdx = curIdx;
    timer = setInterval(() => {
      if (newIdx === len) newIdx = 0;
      setChild(children[newIdx]);
      setCurrentIdx(newIdx);
      newIdx++;
    }, deployTime);
  }

  // stop
  function stop(curIdx) {
    clearInterval(timer);
    timer = null;
  }

  function TurnLeft(dir) {
    stop();
    if (dir === "left") {
      if (currentIdx === 0) currentIdx = len;
      currentIdx--;
    } else if (dir === "right") {
      if (currentIdx === len-1) currentIdx = -1;
      currentIdx++;
    }
     setCurrentIdx(currentIdx)
     setChild(children[currentIdx])
     autoplay&&run()
  }

  // chooseIdx
  function chooseIdx(i) {
    stop();
    setCurrentIdx(i);
    setChild(children[i]);
    autoplay&&run(i);
  }

  return (
    <div className="spider-container">
      <div className="spider">{child}</div>
      <div className="arow">
        <button onClick={() => autoplay&&run(currentIdx)}>开始</button>
        <br />
        <button onClick={() => stop()}>停止</button>
      </div>

      <div className="arow">
        <button onClick={() => TurnLeft("left")}>TurnLeft</button>
        <br />
        <button onClick={() => TurnLeft("right")}>TurnRight</button>
      </div>
      <div className="dot">
        {children.map((e, i) => (
          <button 
          key={i} 
          onClick={() => chooseIdx(i)}
          style={{color:i===currentIdx?'#f00':''}}
          >
            {e}
          </button>
        ))}
      </div>
    </div>
  );
}

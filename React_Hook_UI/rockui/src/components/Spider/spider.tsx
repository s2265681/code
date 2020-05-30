import React,{useState,useEffect} from 'react'
import { isNumber } from 'util';
import Icon from '../../components/Icon/icon'

interface SpiderProps {
    autoplay?:boolean;
    deployTime?:number;
    initIdx?:number;
    children?:any;
    height?:number;
    style?:any;
}
let timer:any;
const Spider: React.FC<SpiderProps>=(props)=> {
    const {children,initIdx,height,autoplay,deployTime,...restProps} = props;
    const len = children.length;
    let [currentIdx, setCurrentIdx] = useState(initIdx);
    const [child, setChild] = useState(children[0]);
    
  useEffect(() => {
    autoplay && run(initIdx);
    return () => {
      stop();
    };
  }, [autoplay,initIdx]);

  // run 开始
  function run(curIdx:any) {
    let newIdx = curIdx;
    timer = setInterval(() => {
      if (newIdx === len) newIdx = 0;
      setChild(children[newIdx]);
      setCurrentIdx(newIdx);
      newIdx++;
    }, deployTime);
  }

  // stop
  function stop() {
    clearInterval(timer);
    timer = null;
  }

  function TurnLeft(dir:string) {
    stop();
    if (dir === "left") {
      if (currentIdx === 0) currentIdx = len;
      if(isNumber(currentIdx))--currentIdx;
    } else if (dir === "right") {
      if (currentIdx === len - 1) currentIdx = -1;
      if(isNumber(currentIdx))++currentIdx;
    }
    setCurrentIdx(currentIdx);
    setChild(children[currentIdx||0]);
    autoplay && run(currentIdx);
  }

  // chooseIdx
  function chooseIdx(i:any) {
    stop();
    setCurrentIdx(i);
    setChild(children[i]);
    autoplay && run(i);
  }

    return (
        <div className="spider-container" {...restProps} >
              <div className="spider" style={{ height }} >
                {child}
              </div>
              <div className="dot">
                {children.map((e: any, i:number) => (
                  <button
                    key={i}
                    onClick={() => chooseIdx(i)}
                    style={{ background: i === currentIdx ? "#f00" : "" }}
                  >
                    {i === currentIdx && <div></div>}
                  </button>
                ))}
              </div>
              <div className="arow">
                  <a href="javascript:;" onClick={() => TurnLeft("left")}>
                        <Icon icon="arrow-circle-left" size="2x"></Icon>
                    </a>
                  <a href="javascript:;" onClick={() => TurnLeft("right")}>
                        <Icon icon="arrow-circle-right" size="2x"></Icon>
                  </a>
              </div>  
      </div>
    )
}

Spider.defaultProps={
  autoplay : true,
  deployTime :1000,
  initIdx : 0,
  height :300
}

export default Spider

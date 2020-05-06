import React from 'react';
// import './App.css';
import Button,{ButtonSize,ButtonType} from './components/Button/button'
import Alert,{AlertType} from './components/Alert/alert'


const App:React.FC =()=> {
  return (
    <div className="App">
      <header className="App-header">
            <div className="buttons">
                <Button size={ButtonSize.Small}
                autoFocus  
                onClick={(e)=>{e.preventDefault();alert('123')}} 
                className="tok"
                >hello</Button>
                <Button btnType={ButtonType.Primary}>Primary</Button>
                <Button btnType={ButtonType.Dashed}>Dashed</Button>
                <Button btnType={ButtonType.Default} size={ButtonSize.Large}>Default</Button>
                <Button btnType={ButtonType.Danger} size={ButtonSize.Large}>Danger</Button>
                <Button btnType={ButtonType.Link} href="http://www.baidu.com" target="_blank" size={ButtonSize.Large}>BaiduLink</Button>
                <Button btnType={ButtonType.Primary} disabled size={ButtonSize.Large}>BaiduLink</Button>
            </div>
            <div className="alerts">
               <Alert type={AlertType.Success} message="Alert Success" />
               <Alert type={AlertType.Error} message="Alert Error" />
               <Alert type={AlertType.Info} message="Alert Error" />
               <Alert type={AlertType.Warning} message="Alert Error" />
            </div>
        </header>
    </div>
  );
}


export default App;

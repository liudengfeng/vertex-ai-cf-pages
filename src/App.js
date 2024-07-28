// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      {/* <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div> */}
      <div className="container">
        <div className="sidebar">
          <h2>菜单</h2>
          <ul>
            <li>主页</li>
            <li>探索</li>
            <li>通知</li>
            <li>消息</li>
            <li>书签</li>
            <li>列表</li>
            <li>个人资料</li>
            <li>更多</li>
          </ul>
        </div>
        <div className="content">
          <h2>内容</h2>
          <p>这里是主要内容区域。</p>
        </div>
        <div className="widgets">
          <h2>参数</h2>
          <p>这里是参数区域。</p>
        </div>
      </div>
    </>
  );
}

export default App;

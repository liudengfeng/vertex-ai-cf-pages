import logo from './logo.svg';
import './App.css';
import SidebarMenu
  from './Sidebar';
function App() {
  return (
    <div className="container">
      <div className="sidebar">
        <div className="logo-container">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <SidebarMenu />
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
  );
}

export default App;
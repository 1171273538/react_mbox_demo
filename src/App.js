import React from 'react';
import { Provider } from 'mobx-react'
import store from './store/store'
import Home from './page/home/Home'
function App() {
  return (
    <div style={{ margin: 'auto', width: '700px', height: '600px', border: '1px solid #ddd', boxShadow: '0 0 40px #ddd' }}>
      <Provider store={store}>
        <Home></Home>
      </Provider>
    </div>
  );
}

export default App;

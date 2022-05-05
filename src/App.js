import React from 'react';
import NewsContainer from './components/News/NewsComponent';
import './styles/App.css';

const App = () => {
  return (
    <div id="parentContainer">
      <NewsContainer items="BTC" apiKeyNumber={1} />
    </div>
  );
};

export default App;

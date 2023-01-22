import React from 'react';

import { CustomButton } from './components';
import './App.css';
import { get, store } from './api';

function App() {
  const [num, setNum] = React.useState(0);

  const handleClick = () => {
    store({date: new Date}).then(r => {
      if (r.data.success) setNum(s => s+=1);
    }).catch(e => {
      console.log(e)
    })
  }

  React.useEffect(() => {
    get().then(r => {
      setNum(r.data.data);
    }).catch(e => {
      console.log(e)
    })
  }, [])

  return (
    <div className="App" style={{ padding: '20px' }}>
      <div>{num}</div>
      <CustomButton
        size='large'
        type="primary"
        onClick={handleClick}
      >Click Me!</CustomButton>
    </div>
  );
}

export default App;

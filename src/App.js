import React, { Fragment } from 'react';
import { Navbar, SwapBox } from './components/index';
// import { useMoralis } from 'react-moralis';

const App = () => {
  // const { authenticate, isAuthenticated, user } = useMoralis();

  // if (!isAuthenticated) {
  //   return (
  //     <div>
  //       <button onClick={() => authenticate()}>Authenticate</button>
  //     </div>
  //   );
  // }
  return (
    <Fragment>
      <Navbar />
      <SwapBox />
    </Fragment>
  );
};

export default App;

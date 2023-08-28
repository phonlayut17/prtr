import React, { useState, useEffect } from 'react';
import HeaderComponent from '../../components/header/HeaderComponent';
import UserFormComponent from '../../components/test-two/UserFormComponent';
import UserListComponent from '../../components/test-two/UserListComponent';
import { Provider } from 'react-redux';
import store from '../../store/store';
function TestTwoPage(props: any) {
  const [data, setData] = useState(() => {
    const result = localStorage.getItem('persons');
    return result ? JSON.parse(result) : [];
  });
  useEffect(() => {
    localStorage.setItem('persons', JSON.stringify(data));
  }, [data]);
  function update() {
    const result = localStorage.getItem('persons');
    if (result) {
      setData(JSON.parse(result));
    }
  }
  const setHome = () => {
    props.setPage('home');
  };
  return (
    <>
      <header>
        <HeaderComponent setHome={setHome}/>
      </header>
      <body>
        <Provider store={store}>
          <UserFormComponent data={data} setData={setData} update={update} />
          <UserListComponent data={data} setData={setData} update={update} />
        </Provider >
      </body>
    </>
  );
}

export default TestTwoPage;

import React from 'react';
import I18WithShapeComponent from '../../components/test-one/I18WithShapeComponent';
import HeaderComponent from '../../components/header/HeaderComponent';
function TestOnePage(props: any) {
  const setHome = () => {
    props.setPage('home');
  };
  return (
    <>
      <header>
        <HeaderComponent setHome={setHome} />
      </header>
      <body>
        <I18WithShapeComponent />
      </body>
    </>
  );
}

export default TestOnePage;

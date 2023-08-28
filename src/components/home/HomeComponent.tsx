import React, { useState } from 'react';
import TestOnePage from '../../pages/test-one/TestOnePage';
import TestTwoPage from '../../pages/test-two/TestTwoPage';
import HeaderComponent from '../header/HeaderComponent';
import { Col, Row, Button } from 'antd';
import { useTranslation } from 'react-i18next';

function HomeComponent() {
    const { t } = useTranslation();
    const [pages, setPage] = useState('home');

    const setPath = (path: string) => {
        setPage(path);
    };

    return (
        <>
            {pages === 'home' ? (
                <div>
                    <header>
                        <HeaderComponent />
                    </header>
                    <body>
                        <Row gutter={2}>
                            <Col span={12}>
                                <Button shape="round" onClick={() => setPath('test1')} block className='btn-click'>
                                    <h1>{t('test1')}</h1>
                                </Button>
                            </Col>
                            <Col span={12}>
                                <Button shape="round" onClick={() => setPath('test2')} block className='btn-click'>
                                    <h1>{t('test2')}</h1>
                                </Button>
                            </Col>
                        </Row>
                    </body>
                </div>
            ) : pages === 'test1' ? (
                <TestOnePage setPage={setPage} />
            ) : (
                <TestTwoPage setPage={setPage} />
            )}
        </>
    );
}

export default HomeComponent;

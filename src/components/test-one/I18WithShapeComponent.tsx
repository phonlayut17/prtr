import React, { useState } from 'react';
import { Col, Row, Button, Tooltip } from 'antd';
import { useTranslation } from 'react-i18next';

const shape = ['square', 'circle', 'oval', 'trapezoid', 'rectangle', 'parallelogram'];

function I18WithShapeComponent() {
    const { t } = useTranslation();

    const [data, setData] = useState<string[]>([...shape]);

    const pushLeft = () => {
        const firstItem = data.shift();
        if (firstItem) {
            setData([...data, firstItem]);
        }
    };

    const pushRight = () => {
        const lastItem = data.pop();
        if (lastItem) {
            setData([lastItem, ...data]);
        }
    };

    const pushTopBottom = () => {
        const lastThreeItems = data.slice(-3);
        const remainingItems = data.slice(0, -3);
        setData([...lastThreeItems, ...remainingItems]);
    };

    const randomData = () => {
        const result = [...shape];
        for (let i = result.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [result[i], result[j]] = [result[j], result[i]];
        }
        setData(result);
    };

    return (
        <div>
            <Col>
                <Row>
                    <Col span={6} className='padding-click'>
                        <Tooltip title="left">
                            <div style={{ position: 'relative' }}>
                                <Button shape="round" block onClick={pushLeft} className='btn-click'>
                                    <div className='triangle-left'></div>
                                </Button>
                                <div className='badge'>
                                    <Button className='bg-badge'>{t('shape')}</Button>
                                </div>
                            </div>
                        </Tooltip>
                    </Col>
                    <Col span={12} className='padding-click'>
                        <Tooltip title="top-bottom">
                            <div style={{ position: 'relative' }}>
                                <Button shape="round" block onClick={pushTopBottom} className='btn-click'>
                                    <Row>
                                        <div className='triangle-up'></div>
                                        <div className='triangle-down'></div>
                                    </Row>
                                </Button>
                                <div className='badge'>
                                    <Button className='bg-badge'>{t('position')}</Button>
                                </div>
                            </div>
                        </Tooltip>
                    </Col>
                    <Col span={6} className='padding-click'>
                        <Tooltip title="right">
                            <div style={{ position: 'relative' }}>
                                <Button shape="round" block onClick={pushRight} className='btn-click'>
                                    <div className='triangle-right'></div>
                                </Button>
                                <div className='badge'>
                                    <Button className='bg-badge'>{t('shape')}</Button>
                                </div>
                            </div>
                        </Tooltip>
                    </Col>
                </Row>
                <br />
                <Row justify="center">
                    {data.map((item, index) => (
                        <Col span={8} key={index} className='btn-position'>
                            <Button shape="round" block onClick={randomData} className='btn-shape'>
                                <div className={item}>
                                </div>
                            </Button>
                        </Col>

                    ))}
                </Row>
            </Col >
        </div >
    );
}

export default I18WithShapeComponent;

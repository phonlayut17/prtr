import React from 'react';
import { Col, Row, Menu, Button, Dropdown } from 'antd';
import { useTranslation } from 'react-i18next';
function HeaderComponent(props: any) {
    const { t, i18n } = useTranslation();
    const items = [
        {
            key: 'en',
            label: <p>{t('en')}</p>,
        },
        {
            key: 'th',
            label: <p>{t('th')}</p>,
        },
    ];
    const changeLan = (langKey: string) => {
        i18n.changeLanguage(langKey);
    };
    return (
        <Row>
            <Col span={12} style={{ textAlign: 'left' }}>
                <h3>{t('layout')}</h3>
            </Col>
            <Col span={12} style={{ textAlign: 'right' }}>
                <Button onClick={props.setHome}>{t('home')}</Button>
                <Dropdown
                    overlay={
                        <Menu>
                            {items.map((item) => (
                                <Menu.Item key={item.key} onClick={() => changeLan(item.key)}>
                                    {item.label}
                                </Menu.Item>
                            ))}
                        </Menu>
                    }
                    placement="bottomRight"
                >
                    <Button>{t('en')}</Button>
                </Dropdown>
            </Col>
        </Row>
    );
}

export default HeaderComponent;
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            en: 'EN',
            th: 'TH',
            layout: 'Layout & Style',
            position: 'Move position',
            shape: 'Move shape',
            mr: 'Mr.',
            mrs: 'Mrs.',
            miss: 'Miss',
            select: 'Please select',
            test1: 'Test 1',
            test2: 'Test 2',
            home: 'home'
        },
    },
    th: {
        translation: {
            en: 'อังกฤษ',
            th: 'ไทย',
            layout: 'การจัดการหน้าเว็บ',
            position: 'เปลี่ยนตำแหน่ง',
            shape: 'เลื่อนรูปแบบ',
            mr: 'นาย',
            mrs: 'นาง',
            miss: 'นางสาว',
            select: 'กรุณาเลือก',
            test1: 'แบบทดสอบที่ 1',
            test2: 'แบบทดสอบที่ 2',
            home: 'หน้าหลัก'
        },
    },
};

i18n.use(initReactI18next).init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;

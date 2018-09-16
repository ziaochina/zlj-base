import React from 'react'
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import 'moment'

export default function LocaleProviderExComponent(props) {
    var LocaleProvider = MK.getComponent('LocaleProvider')
    return (
        <LocaleProvider locale={zh_CN} {...props}></LocaleProvider>
    )
}
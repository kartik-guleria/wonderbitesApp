import React from 'react';
import {WebView} from 'react-native-webview';

const WebPage = props => {

    return (
        <WebView
            source= {props.source}
            style = {props.style}
        />
    );

};

export default WebPage;

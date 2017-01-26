/// <reference types="react-native" />
/// <reference types="react" />
import * as React from 'react';
export interface RNEditorProperties {
    source?: number | React.WebViewUriSource | React.WebViewHtmlSource;
    autoHeight?: boolean;
}
export default class RNEditor extends React.Component<RNEditorProperties, any> {
    static defaultProps: {
        source: any;
        autoHeight: boolean;
    };
    private webview;
    private invoke;
    render(): JSX.Element;
}

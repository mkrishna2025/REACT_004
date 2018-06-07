import React, { Component } from 'react';

import Header from '../header';
import Footer from '../footer';

export default class MasterPage extends React.Component {
    render(){
        return <div>
            <Header />
            {this.props.children}
            <Footer />
        </div>
    }
}
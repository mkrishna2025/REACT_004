import React, { Component } from 'react';

export default class NameForm extends React.Component {
    render() {
        return (
            <div>
                Update Name
                <input type='text' value={this.props.name} onChange={this.props.onChange} />
            </div>
        );

    }
}
import React, { Component } from 'react';

import MasterPage from '../../components/masterpage';

export default class Reservation extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            news: [
                { url:'#', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing' },
                { url:'#', text: 'Nam sit amet dui gravida tellus lobortis ullamcorper.' },
                { url:'#', text: 'Sed sit amet interdum magna vulputate mollis lectus' },
                { url:'#', text: 'Vestibulum in feugiat dolor. Pellentesque in adipiscing orci.' },
                { url:'#', text: 'Maecenas eu ipsum a odio varius mollis vitae at ante' },
                { url:'#', text: 'Aenean faucibus suscipit velit at tincidunt.' },
                { url:'#', text: 'Mauris pharetra sem quis convallis gravida enim' }
            ]
        }
    }
    render(){
        return <MasterPage>
            <div id="body">
                <div class="content">
                    <div class="body">
                    <h2>RESERVATION</h2>
                    <ul>
                        <li>
                        <h4> This website template has been designed by free website templates for you, for free. You can replace all this text with your own text. </h4>
                        <p> You can remove any link to our website from this website template, you're free to use this website template without linking back to us. If you're having problems editing this website template, then don't hesitate to ask for help on the Forum. </p>
                        </li>
                    </ul>
                    <ul class="news">
                        {this.state.news.map(item => <li> <a href={item.url}>{item.text} </a> </li>)}
                    </ul>
                    </div>
                </div>
                </div>
        </MasterPage>;
    }
}
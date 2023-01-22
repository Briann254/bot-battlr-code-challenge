import React, { Component } from 'react';
import React, { useState, useEffect } from 'react';

class BotCollection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bots: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:8001/bots')
            .then(response => response.json())
            .then(data => this.setState({ bots: data }))
            .catch(error => console.error(error))
    }
    

    render() {
        const { bots } = this.state;
        return (
            <div>
                {bots.map(bot => (
                    <div key={bot.id}>
                        <h3>{bot.name}</h3>
                        <p>Health: {bot.health}</p>
                        <p>Damage: {bot.damage}</p>
                        <p>Armor: {bot.armor}</p>
                        <p>Class: {bot.bot_class}</p>
                        <p>Catchphrase: {bot.catchphrase}</p>
                        <img src={bot.avatar_url} alt={bot.name}/>
                    </div>
                ))}
            </div>
        )
    }
    
}

export default BotCollection;

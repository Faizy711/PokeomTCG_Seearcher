import React, { Component } from 'react';
import axios from 'axios'

class PokeList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pokemonList: [],
        }
    }

    componentDidMount() {
        axios.get('https://api.pokemontcg.io/v1/cards').then(res => {
            console.log(res);
            this.setState({ pokemonList: res.data.cards });
        });
    }

    render() {
        return (
            <div className="media_scroll">
                <ul className="list-unstyled">
                    {this.state.pokemonList.map(pokemonList => (
                        <div className="Pokecards">
                            <img src={pokemonList.imageUrl} key={pokemonList.id} className="PokeCardsImg" />
                            <h5>{pokemonList.nationalPokedexNumber}</h5>
                            <p>{pokemonList.name} </p>
                        </div>
                    ))}

                </ul>
            </div>
        );
    }
}

export default PokeList;
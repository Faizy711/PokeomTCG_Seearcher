import React, { Component } from 'react';
import axios from 'axios'
import { push_uniq } from 'terser';
import { MDBBtn } from "mdbreact";

class PokeList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pokemonList: [],
            baseList: [],
            btnClick: false,
        }
    }

    componentDidMount() {
        axios.get('https://api.pokemontcg.io/v1/cards').then(res => {
            console.log(res);
            this.setState({ pokemonList: res.data.cards });
        });


    }

    Setfunction = () => {

        this.setState({ btnClick: true });
        for (var i = 0; i < this.state.pokemonList.length; i++) {

            if (this.state.pokemonList[i].set === "Base") {
                console.log(this.state.baseList);
                this.state.baseList.push(this.state.pokemonList[i]);
            }
        }

    }

    render() {
        return (
            <div className="media_scroll">
                <MDBBtn gradient="peach" onClick={this.Setfunction}>Peach</MDBBtn>
                {this.state.btnClick ?
                    <ul className="list-unstyled">

                        {this.state.baseList.map(pokemonList => (
                            <div className="Pokecards" key={pokemonList.id}>
                                <img src={pokemonList.imageUrl}  className="PokeCardsImg" />
                                <h5>{pokemonList.nationalPokedexNumber}</h5>
                                <p>{pokemonList.name} </p>
                            </div>
                        ))}

                    </ul>

                    :
                    <div></div>

                }

            </div>
        );
    }
}

export default PokeList;
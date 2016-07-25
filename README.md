Pokédex Go
==========

A NPM package to create a localized Pokédex for Niantic's Pokémon Go.

Available languages:

* English
* French
* German

## Installation

    npm install --save pokedexgo

## Usage

First of all, require the module:

    import Pokedex from 'pokedexgo';

Create a localized Pokédex by using one of the following param:

Language | Param
--- | ---
:uk: | `EN`
:fr: | `FR`
:de: | `DE`

    const PokedexEN = Pokedex('EN');

This Pokédex is an array of objects which has the following structure:

    console.log(PokedexEN)

    >  [
        {
          id: 1,
          num: '001',
          height: 0.71,
          weight: 6.9,
          candy: 25,
          egg: 2,
          max_cp: 1071.54,
          name: 'Bulbasaur',
          type: [
            'Grass',
            'Poison'
          ]
        },
        ...
      ]

Key | Type | Meaning | Unit | Remark
--- | --- | --- | --- | ---
id | `number` | Unique ID | *-* | -
num | `string` | Pokédex number | *-* | -
height | `number` | Height of the Pokémon | *m* | -
weight | `number` | Weight of the Pokémon | *kg* | -
candy | `number` | Number of candies needed to evolve | *candies* | If 0, no evolution
egg | `number` | Distance to hatch as an egg | *km* | If 0, not available as an egg
max_cp | `number` | Maximum CP | *CP* | -
name | `string` | Name of the Pokémon | *-* | -
type | `array` | Types of the Pokémon | *-* | -

## Contributing

Feel free to add other languages !

    git clone https://github.com/aknorw/pokedexgo.git && cd pokedexgo
    npm install

## Special thanks

* [Biuni's PokemonGOPokedex](https://github.com/Biuni/PokemonGOPokedex) for the data
* [AHAAAAAAA's PokemonGo-Map](https://github.com/AHAAAAAAA/PokemonGo-Map) for the French and German translations

## Release history

* **1.2.0** Maximum CP added
* **1.1.0** Localized types for French and German added
* **1.0.0** Initial release

## To-do

* Add test script

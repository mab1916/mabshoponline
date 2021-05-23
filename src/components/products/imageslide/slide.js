import j1 from "./1.png";
import e1 from "./2.png";
import c1 from "./3.png";
import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@material-ui/core'

export default function Slider()
{
    var items = [
        {
            image: j1,
            name: "Jewelery"
        },
        {
            image: e1,
            name: "Electronic"
        },
        {
            image: c1,
            name: "Clothes"
        }
    ]

    return (
        <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
        <Paper>
            <img src={props.item.image} alt={props.item.image} width="200" height='250' />
            <h2>{props.item.name}</h2>
        </Paper>
    )
}
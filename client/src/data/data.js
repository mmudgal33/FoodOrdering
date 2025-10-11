import burger1 from '../assets/burger1.jpg'
import burger2 from '../assets/burger2.jpg'
import burger3 from '../assets/burger3.jpg'
import burger4 from '../assets/burger4.jpg'
import burger5 from '../assets/burger5.jpg'

import gyros1 from '../assets/gyros1.jpg'
import gyros2 from '../assets/gyros2.jpg'
import gyros3 from '../assets/gyros3.jpg'
import gyros4 from '../assets/gyros4.jpg'
import gyros5 from '../assets/gyros5.jpg'

import pizza1 from '../assets/pizza1.jpg'
import pizza2 from '../assets/pizza2.jpg'
import pizza3 from '../assets/pizza3.jpg'
import pizza4 from '../assets/pizza4.jpg'
import pizza5 from '../assets/pizza5.jpg'

import pasta1 from '../assets/pasta1.jpg'
import pasta2 from '../assets/pasta2.jpg'
import pasta3 from '../assets/pasta3.jpg'
import pasta4 from '../assets/pasta4.jpg'
import pasta5 from '../assets/pasta5.jpg'

import momos1 from '../assets/momos1.jpg'
import momos2 from '../assets/momos2.jpg'
import momos3 from '../assets/momos3.jpg'
import momos4 from '../assets/momos4.jpg'
import momos5 from '../assets/momos5.jpg'

import fries1 from '../assets/fries1.jpg'
import fries2 from '../assets/fries2.jpg'
import fries3 from '../assets/fries3.jpg'
import fries4 from '../assets/fries4.jpg'
import fries5 from '../assets/fries5.jpg'

import petis1 from '../assets/petis1.png'
import petis2 from '../assets/petis2.jpg'
import petis3 from '../assets/petis3.jpg'
import petis4 from '../assets/petis4.jpg'
import petis5 from '../assets/petis5.jpg'

import roll1 from '../assets/roll1.jpg'
import roll2 from '../assets/roll2.jpg'
import roll3 from '../assets/roll3.jpg'
import roll4 from '../assets/roll4.jpg'
import roll5 from '../assets/roll5.jpg'

import tikichat1 from '../assets/tikichat1.jpg'
import tikichat2 from '../assets/tikichat2.jpg'
import tikichat3 from '../assets/tikichat3.jpg'
import tikichat4 from '../assets/tikichat4.jpg'
import tikichat5 from '../assets/tikichat5.jpg'

import chowmin1 from '../assets/chowmin1.jpg'
import chowmin2 from '../assets/chowmin2.jpg'
import chowmin3 from '../assets/chowmin3.jpg'
import chowmin4 from '../assets/chowmin4.jpg'
import chowmin5 from '../assets/chowmin5.jpg'


export const foodTypes = [
    {
        name: 'burger',
        img: burger1,
        id: crypto.randomUUID()
    },
    {
        name: 'gyros',
        img: gyros4,
        id: crypto.randomUUID()
    },
    {
        name: 'pizza',
        img: pizza1,
        id: crypto.randomUUID()
    },
    {
        name: 'pasta',
        img: pasta1,
        id: crypto.randomUUID()
    },
    {
        name: 'momos',
        img: momos2,
        id: crypto.randomUUID()
    },
    {
        name: 'fries',
        img: fries1,
        id: crypto.randomUUID()
    },
    {
        name: 'petis',
        img: petis1,
        id: crypto.randomUUID()
    },
    {
        name: 'roll',
        img: roll1,
        id: crypto.randomUUID()
    },
    {
        name: 'tikichat',
        img: tikichat1,
        id: crypto.randomUUID()
    },
    {
        name: 'chowmin',
        img: chowmin1,
        id: crypto.randomUUID()
    },
]


// 24 foods (6 burger, 6 gyros, 6 pizza, 6 pasta)
export const foods = [
    {
        name: 'Burger 1',
        category: 'burger',
        img: burger1,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Burger 2',
        category: 'burger',
        img: burger2,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Burger 3',
        category: 'burger',
        img: burger3,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Burger 4',
        category: 'burger',
        img: burger4,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Burger 5',
        category: 'burger',
        img: burger5,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Pizza 1',
        category: 'pizza',
        img: pizza1,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Pizza 2',
        category: 'pizza',
        img: pizza2,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Pizza 3',
        category: 'pizza',
        img: pizza3,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Pizza 4',
        category: 'pizza',
        img: pizza4,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Pizza 5',
        category: 'pizza',
        img: pizza5,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Gyros 1',
        category: 'gyros',
        img: gyros1,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Gyros 2',
        category: 'gyros',
        img: gyros2,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Gyros 3',
        category: 'gyros',
        img: gyros3,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Gyros 4',
        category: 'gyros',
        img: gyros4,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Gyros 5',
        category: 'gyros',
        img: gyros5,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Pasta 1',
        category: 'pasta',
        img: pasta1,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Pasta 2',
        category: 'pasta',
        img: pasta2,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Pasta 3',
        category: 'pasta',
        img: pasta3,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Pasta 4',
        category: 'pasta',
        img: pasta4,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Pasta 5',
        category: 'pasta',
        img: pasta5,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Momos 1',
        category: 'Momos',
        img: momos1,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Momos 2',
        category: 'Momos',
        img: momos2,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Momos 3',
        category: 'Momos',
        img: momos3,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Momos 4',
        category: 'Momos',
        img: momos4,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Momos 5',
        category: 'Momos',
        img: momos5,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Fries 1',
        category: 'Fries',
        img: fries1,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Fries 2',
        category: 'Fries',
        img: fries2,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Fries 3',
        category: 'Fries',
        img: fries3,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Fries 4',
        category: 'Fries',
        img: fries4,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Fries 5',
        category: 'Fries',
        img: fries5,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Petis 1',
        category: 'Petis',
        img: petis1,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Petis 2',
        category: 'Petis',
        img: petis2,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Petis 3',
        category: 'Petis',
        img: petis3,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Petis 4',
        category: 'Petis',
        img: petis4,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Petis 5',
        category: 'Petis',
        img: petis5,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Roll 1',
        category: 'Roll',
        img: roll1,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Roll 2',
        category: 'Roll',
        img: roll2,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Roll 3',
        category: 'Roll',
        img: roll3,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Roll 4',
        category: 'Roll',
        img: roll4,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Roll 5',
        category: 'Roll',
        img: roll5,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Tikichat5 1',
        category: 'Tikichat',
        img: tikichat1,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Tikichat5 2',
        category: 'Tikichat',
        img: tikichat2,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Tikichat5 3',
        category: 'Tikichat',
        img: tikichat3,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Tikichat5 4',
        category: 'Tikichat',
        img: tikichat4,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Tikichat5 5',
        category: 'Tikichat',
        img: tikichat5,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Chowmin 1',
        category: 'Chowmin',
        img: chowmin1,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Chowmin 2',
        category: 'Chowmin',
        img: chowmin2,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Chowmin 3',
        category: 'Chowmin',
        img: chowmin3,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Chowmin 4',
        category: 'Chowmin',
        img: chowmin4,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Chowmin 5',
        category: 'Chowmin',
        img: chowmin5,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
]
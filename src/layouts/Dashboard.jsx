import React from 'react'
import Navi from './Navi'
import Categories from './Categories'
import ProductLists from '../pages/ProductLists'
export default function Dashboard() {
    return (
        <div>
            <Navi/>
            <Categories/>
            <ProductLists/>
        </div>
    )
}

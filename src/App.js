import React from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { GlobalStyles } from './GlobalStyles'
import { ListOfPhotoCards } from './components/PhotoCard'


export const App = () => (
    <>
        <GlobalStyles />
        <ListOfCategories />
        <ListOfPhotoCards />
    </>
)
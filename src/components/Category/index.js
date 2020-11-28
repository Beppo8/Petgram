import React from 'react'
import { Link, Image } from './styles';

const DEFUALT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg'

export const Category = ({ cover =
DEFUALT_IMAGE, path, emoji = '?' }) => (
    <Link to={path}>
        <Image src={cover} />
        {emoji}
    </Link>
)
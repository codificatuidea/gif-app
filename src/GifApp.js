import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifApp = () => {

    const [categories, setCategories] = useState(['One Punch'])

    return (
        <>
            <h2>GifApp</h2>
            <hr />
            <AddCategory setCategories={setCategories} />
            {
                categories.map(category => (
                    <GifGrid 
                        key={category}
                        category={category}
                    />
                ))
            }
        </>
    )
}

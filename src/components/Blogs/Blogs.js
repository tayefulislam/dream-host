import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='blogs'>

            <div>

                <h1>What is context API?</h1>
                <p>Context api is a way or a system that gives us power to pass data like global data or global variables.This is the alternative to "prop drilling" or moving props from grandparent to child to parent. By using context api you can pass lots of type data like array ,function etc. It works faster than prop drilling system ,which improves application performance.</p>

            </div>

            <div>

                <h1>What is a semantic tag?</h1>

                <p> In normal definition Semantic tag / element is a thing that describes its meaning to both the browser and the developer. For example, By seeing  div ,span " etc. which you can't understand which type of  content is this. On the other hand form , table , and article - Tag  clearly defines its content.(which type of content) </p>

            </div>



        </div>
    );
};

export default Blogs;
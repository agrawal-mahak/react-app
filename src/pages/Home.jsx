import React from 'react'
import Spinner from "../components/Spinner";
import Product from "../components/Product";
import { useState, useEffect } from "react";

const Home = () => {
    const API_URL = "https://jsonplaceholder.typicode.com/posts"
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    
    async function fetchProductData(){
        setLoading(true);
        try{
            const res = await fetch(API_URL);
            const data = await res.json();

            setPosts(data);
        }
        catch(error){
            console.log("Error in something.")
            setPosts([]);
        }


        setLoading(false);
    }

    useEffect( () => {
        setTimeout(() => fetchProductData(), 5000);
        // fetchProductData();
    }, [])
    
    return (
    <div>
    {
        loading ? <Spinner/> : 
        (<div>
            {
                posts.map((post) => (
                    <Product key = {post.id} post = {post}/>
                ))
            }
        </div>)
    }
    </div>
  )
}

export default Home
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import Cards from "./Cards";
import { Link } from 'react-router-dom';
import axios from "axios";
function Course() {
  const [book, setBook] = useState([])
  useEffect(()=> {
    const getBook = async() => {
      try{
     const res = await axios.get("http://localhost:4001/book");
     console.log(res.data);
     setBook(res.data);
      } catch(error) {
        console.log(error);
      }
    }
    getBook();
  },[])
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 '>
      <div className='pt-28 items-center justify-center text-center'>
        <h1 className='text-2xl font-semibold md:text-4xl'>We are delighted to have you <span className='text-pink-500'>Here! :)</span></h1>
        <p className='mt-12'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto dignissimos itaque repellendus, amet rerum accusantium minima molestias eaque quod doloremque. Aliquam laudantium, explicabo maxime aperiam tempora pariatur ullam. Possimus modi laborum minima quasi, doloribus blanditiis quae eos quidem sed voluptatem vitae laboriosam corrupti perspiciatis omnis atque cupiditate? Facere, rerum nam!
        </p>
        <Link to="/">
        <button className='bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 mt-6'>Back</button>
        </Link>
      </div>
      <div className='mt-12 grid grid-cols-1 md:grid-cols-3'>
        {
          book.map((item) =>(
            <Cards key={item.id} item={item} />
          ))
        }
      </div>
    </div>
    </>
  );
}

export default Course;
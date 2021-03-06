import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css'
const AddService = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data =>{
        console.log(data);
        axios.post('https://infinite-eyrie-27553.herokuapp.com/services',data) 
        .then(res=>{
            // console.log(res)
            if(res.data.insertedId){
                alert('added successfully')
                reset()
            }
        })
    }
    return (
        <div className='add-service'>
            <h2 className='mt-4'>Add a New Service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name", { required: true, maxLength: 20 })} placeholder='Name' />
      <input {...register("price")} placeholder='Price'/>
      <input {...register("place")} placeholder='Place'/>
      <textarea {...register("description")}placeholder='Description'/>
      <input {...register("img")} placeholder='Img Url'/>
      <input type="submit" />
    </form>
        </div>
    );
};

export default AddService;
 
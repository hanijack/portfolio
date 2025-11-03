"use client"


import React from 'react'
import { useForm } from "react-hook-form"


type Data = {
    name: string;
    email: string;
    message: string;

};
export default function Form() {
    const { register, reset, handleSubmit, formState: {
        errors,
        isSubmitSuccessful,
        isSubmitting
    } } = useForm<Data>()





    const formSubmit = async (data: Data) => {
        try {
            const response = await fetch("./api/contact", {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            

            if (!response.ok) { console.log("There was a request error " + response.status) }

            reset()
        } catch (error: any) {
            console.log("error connecting to the server" + error.message)
        }
    }
    return (
        <form onSubmit={handleSubmit(formSubmit)} className="max-w-2xl flex gap-4 flex-col items-center justify-start">

            <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-2 ">
                <label htmlFor="name">
                    Name
                </label>
                <input
                    className="w-[80%] min-w-[250px] py-2 rounded-md pl-2 border border-gray-400 focus:outline-none  focus:border-gray-500 dark:text-[#dce2e6] dark:focus:border-white"
                    id="name"
                    type="text"
                    placeholder="Name"

                    {...register("name", {
                        required: true,
                        maxLength: 15,
                        minLength: {
                            value: 3,
                            message: "Name must be at least 3 charachters"
                        }
                    })}
                />
            </div>
            {errors.name && <p className="text-red-300">{errors.name.message}</p>}

            <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-2">
                <label htmlFor="email">
                    Email
                </label>
                <input
                    className="w-[80%] min-w-[250px] py-2 rounded-md pl-2 border border-gray-400 focus:outline-none  focus:border-gray-500 dark:text-[#dce2e6] dark:focus:border-white"
                    id="email"
                    type="email"
                    placeholder="Email"

                    {...register("email", {
                        required: true,
                        minLength: {
                            value: 5,
                            message: "Email must be at least 5 charachters"
                        }
                    })}
                />
            </div>
            {errors.email && <p className="text-red-300">{errors.email.message}</p>}
            <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-2">

                <label htmlFor="text">
                    Text
                </label>
                <textarea
                    className="w-[80%] min-w-[250px] rounded-md py-2  pl-2 min-h-[200px] border border-gray-400 focus:outline-none  focus:border-gray-500 dark:text-[#dce2e6] dark:focus:border-white"
                    placeholder="Your message"
                    id="text"
                    {...register("message", {
                        required: true,
                        maxLength: {
                            value: 200,
                            message: "Please type a message that does not exceed 200 characters"
                        }
                    })}
                />
            </div>
            {errors.message && <p className="text-red-300">{errors.message.message}</p>}
            <div className='w-[80%] flex justify-center items-center sm:ml-auto'>
                <button disabled={isSubmitting} type="submit" className=" submit-but">Submit</button>
            </div>
            { isSubmitSuccessful && <p className='w-[80%] flex justify-center items-center sm:ml-auto'>Email has been sent </p>}
        </form>
    )
}


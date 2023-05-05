"use client";

import React from 'react';
import { useParams } from 'next/navigation';

interface DogEditProps {
    name: string;
    image: number;
}

const DogEditProps = (props: DogEditProps) => {
    const params = useParams();
    const {} = props;
    const key = `dogs:${params.id}`;
    // const dog = await kv.get(key);

    async function upDog(formData: FormData){
        "use server";
        // await kv.set(key, {
        //     name: formData.get("title"),
        //     image: formData.get("image"),
        //     breed: formData.get("breed"),
        // })

    }

    return (
        <form action={upDog}>
            <label htmlFor="">Name</label>
            <input type="text" name={"Title"}/>
            <label htmlFor="">Image</label>
            <input type="text" name={"image"}/>
            <label
            htmlFor="">Breed</label>
            <input type="text" name={"breed"}/>
            <button type={"submit"}>submit</button>

        </form>
    )
};

export default DogEditProps;
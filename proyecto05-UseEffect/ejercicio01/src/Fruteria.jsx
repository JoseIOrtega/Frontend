import { useEffect, useState } from "react";

function Fruteria(){
    const [name,setName]=useState("");
    const [id,setId]=useState();
    const [familia,setFamilia]=useState("");
    const [order,setOrder]=useState("");
    const [genus,setGenus]=useState("");
    const [calorias,setCalorias]=useState();
    const [fat,setFat]=useState();
    const [sugar,setSugar]=useState();
    const [carbohidratos,setCarbohidratos]=useState();
    const [proteinas,setProteinas]=useState();

    useEffect(()=>{
        consumirApi();
    },[])

    async function consumirApi(){
        const res = await fetch("https://www.fruityvice.com/api/fruit/1",{ method: "GET" });
        const data=await res.json();
        console.log(data);
        setName(data.name);    
	    setId(data.id);
        setFamilia(data.family);
        setOrder(data.order);
        setGenus(data.genus);
        setCalorias(data.nutritions.calories);
        setFat(data.nutritions.fat);
        setSugar(data.nutritions.sugar);
        setCarbohidratos(data.nutritions.carbohydrates);
        setProteinas(data.nutritions.protein)
    }

    return(
        <div>
            <h1>Alimentación</h1>
            <p>Name: {name}</p>
            <br />
            <p>Id: {id}</p>
            <br />
            <p>Family: {familia}</p>
            <br />
            <p>Order: {order}</p>
            <br />
            <p>Genus: {genus}</p>
            <br />
            <p>Calorías: {calorias}</p>
            <br />
            <p>Fat: {fat}</p>
            <br />
            <p>Sugar: {sugar}</p>
            <br />
            <p>Carbohidratos: {carbohidratos}</p>
            <br />
            <p>Proteinas: {proteinas}</p>
        </div>
    )
}
export default Fruteria;
import React, { useState,useEffect, useMemo } from "react";
import * as Components from './CssComponents'; 
import Table from "./Table";
import DataTable from "./ShadCn_table/DataTable";

function Admin(){

    const [id,setID] = useState("")
    const [title,setTitle] = useState("")
    const [state,setState] = useState("")
    const [info,setInfo] = useState("")
    const [imgLink,setImgLink] = useState("")
    const [price,setPrice] = useState(0)
    const [data,setData] = useState([])
    const [isUpdate,setIsUpdate] = useState(false);

    const getAllData = async()=>{
        console.log("getting all data")
        const request =await fetch("http://127.0.0.1:3000/get",{
          method:"GET"
        });
        const data =await request.json();
        const d2 = data
        console.log("d2",{d2})
      setData(d2.rows??[])
      }
    
      useEffect(()=>{
        console.log("In use effect")
        getAllData();
      },[])
      
      const handleDelete = async(id)=>{
        console.log("In delete")
        const response =await fetch("http://127.0.0.1:3000/delete",{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify({id}),
        })

        const r = await response.json();
        console.log({r})
        getAllData();
        

      }

      const handleById = async(id)=>{
        console.log("Getting data bi id");
        setID(id);
        const response =await fetch(`http://127.0.0.1:3000/get/${id}`,{
            method:"GET",            
        });

        const respData = await response.json();
        console.log({respData})
        return respData.data[0];
       
      }

      const handleUpdate=async(id)=>{
        const gettingDataById=await handleById(id);
        console.log("Update data",{gettingDataById})
        if(Object.keys(gettingDataById).length!==0){
          console.log("gettingDataById ",gettingDataById.name,gettingDataById.price,gettingDataById.state,gettingDataById.info);
          setTitle(gettingDataById.name ?? "");
          setPrice(gettingDataById.price??0)
          setState(gettingDataById.state ?? "")
          setInfo(gettingDataById.info??"")
          setImgLink(gettingDataById.imageLink??"");
          setIsUpdate(true);
        }

        


      }

      const handleUpdate2 = async()=>{
        const response =await fetch("http://127.0.0.1:3000/update",{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify({id,title,price,state,imgLink,info}),
        });
        const r = await response.json();
        console.log({r});
        if(r.success){

          getAllData();
        }
      }

    const columns = useMemo(()=>[
        {
            Header:"Locations",
            columns:[
                {
                    Header: 'Name',
                    accessor: 'name',
                  },
                  {
                    Header: 'State',
                    accessor: "state", 
                  },
                  {
                    Header: 'Price',
                    accessor: 'price',
                  },
                 
                  {
                    Header: 'Image Link',
                    accessor: "imageLink", 
                  },
                  {
                    Header: 'Action',
                  },
            ]
        }
       
      ])
    

    const handleSiginSubmit = async ()=>{
        const response =await fetch("http://127.0.0.1:3000/create",{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify({title,state,info,imgLink,price}),
        })

        const r = await response.json();

        console.log(r);
    }

    

    return (
        <>
        <Components.ParentDiv>
        <Components.Container>
            <Components.Form>
                        <Components.Title>Create Tour</Components.Title>
                        <Components.Input type='text' value={title} onChange={(e)=>setTitle(e.target.value)} placeholder='Name' />
                        <Components.Input type='text' value={state} onChange={(e)=>setState(e.target.value)} placeholder='State' />
                        <Components.Input type='text' value={imgLink} onChange={(e)=>setImgLink(e.target.value)} placeholder='Image Link' />
                        <Components.TextArea type='text' value={info} onChange={(e)=>setInfo(e.target.value)} placeholder='Info' />
                        <Components.Input type='number' value={price} onChange={(e)=>setPrice(e.target.value)} placeholder='Price' />
                        {
                          isUpdate?(<Components.Button type="button" onClick={handleUpdate2}>Update</Components.Button>):(<Components.Button type="button" onClick={handleSiginSubmit}>Create</Components.Button>)
                        }
                        
                    </Components.Form>
        </Components.Container>
        </Components.ParentDiv>

        <div>
            <Table columns={columns} data={data} handleDelete={handleDelete} handleUpdate={handleUpdate} />
        </div>

        <div>
          <h1>Shadcn ui library</h1>
          <DataTable />
        </div>

        </>


    )
}

export default Admin;
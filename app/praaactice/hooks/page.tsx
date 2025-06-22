const page =()=>{

    const Employee = [
        {
            id:1,
            name:"John",
            age:20
        },
        {
            id:2,
            name:"Jane",
            age:21
        },
        {
            id:3,
            name:"Jack",
            age:22
        }
    ]

    return(

<>
<h1>
    Hi I am a Page

</h1>
{Employee.map((employee,index)=>(
    
        <div key={index}>
            <h1>{employee.name}</h1>
            <h1>{employee.age}</h1>
        </div>
    )
)
}
</>

)
    
}

export default page;
const wish = 'Everyone'

const element= <h1>Good Luck!! ,{wish} </h1>

let students=['Akshitha','Ram','Sam','Rita','John']

let names = <ul>
    {
    students.map((value,index)=>{
        return <li key={value+index}>{value}</li>
    })
}
</ul>

let allCustomers=React.createElement('div',null,element,names)

ReactDOM.render(allCustomers,document.getElementById('container'))

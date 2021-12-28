function Header({Cname,CId}){
    return <h1 className="example">Company Name: {Cname} {CId}</h1>
}

function Content(props){

    return <h3 id="practice">Employee Details: {props.empName} {props.empId} </h3>
}

function Footer({person}){
    return <h1 className="example">Incharge: {person.firstName} {person.secondName}</h1>
}

ReactDOM.render(<div>
    <Header Cname="ThoughtFocus" CId="106533"/>
    <Content empName="Akshitha" empId="9876"/>
    <Content empName="Teresa" empId="9657"/>
    <Footer person={{firstName:"Patrick",secondName:"Jane"}}/>
    </div>, document.getElementById('container'))
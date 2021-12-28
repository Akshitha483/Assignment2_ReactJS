class Header extends React.Component{
    render(){
        return <h1 className="practice">React JS Training</h1>
    }
}

class Content extends React.Component{
    render(){
        return <p id="example">Trainee Name: {this.props.firstName} {this.props.lastName} </p>
    }
}

class Footer extends React.Component{
    render(){
        return <h1 className="practice">ThoughtFocus</h1>
    }
}


ReactDOM.render(<div>
    <Header/>
    <Content firstName="Akshitha" lastName="MN" />
    <Content firstName="John" lastName="Smith"/>
    <Content firstName="Ram" />
    <Footer/>
</div>, document.getElementById('container'))

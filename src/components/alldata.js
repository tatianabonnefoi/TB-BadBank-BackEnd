import React from 'react'
import { Card } from 'react-bootstrap'


export default function Alldata() {
    class App extends Component {
    constructor(){
        super()
        this.state = {

            fullName:'',
            username:'',
            email:'',
            password:'',
            balance:''
        }
        this.changeFullName = this.changeFullName.bind(this)
        this.changeUsername = this.changeUsername.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changePassword = this.changePassword.bind(this)
        this.changeBalance = this.changeBalance.bind(this)
        this.onSubmit=this.onSubmit.bind(this)

    }

    changeFullName(event){
        this.setState({
           fullName:event.target.value 
        })
    }

    changeUsername(event){
        this.setState({
           username:event.target.value 
        })
    }

    changeEmail(event){
        this.setState({
           email:event.target.value 
        })
    }

    changePassword(event){
        this.setState({
           password:event.target.value 
        })
    }

    changeBalance(event){
        this.setState({
           balance:event.target.value 
        })
    }

    onSubmit(event){
        event.preventDefault()

        const registered ={
            fullName: this.state.fullName,
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            balance: this.state.balance,
        }
        axios.post("http://localhost:4000/app/signup", registered)
        .then(response => console.log(response.data))

        this.setState({
            fullName:'',
            username:'',
            email:'',
            password:'',
            balance: '',
        })
    }

    }

    return (
        <Card>
            
            <Card.Body>
                    <h4 className="text-center mb-4" onClick={handleClick}>All Data</h4>
                    <h6>Balance: ${balance}</h6>
                   
                    
                    

            </Card.Body>   
   

        </Card>
    )
    
}
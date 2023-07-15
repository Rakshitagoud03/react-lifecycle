import React,{component}  from 'react'
class Counter extends Component{
    constructor(props){
        super(props);
        this.state={
            view:false
        }
    }
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h3 className="display-3 text-success">Counter</h3>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <h1 className="text-center text-success">Num={this.props.num}</h1>

                        <div>
                            {
                                this.state.view ?
                                (<h1 className='text-center text-success'>Welcome to react lifecycle</h1>):
                                (
                                    <div>
                                        <h1 className="text-center text-warning">Need more counts</h1>
                                        <button className="btn btn-dark">Increment</button>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Counter
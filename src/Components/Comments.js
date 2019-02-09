import React, {Component} from 'react'

class Comments extends Component {

    //bind handleubmit to instance
    constructor(){
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(event){
        //prevent default behavior of refreshing page upon submission
        event.preventDefault()
        //target refers to form just submitted
        const comment = event.target.elements.comment.value
        this.props.startAddingComment(comment, this.props.id)
        event.target.elements.comment.value = ''
    }

    render(){
       return  <div className="comment">
       {
           this.props.comments.map((comment, index) =>{
               return(
                   <p key={index}>{comment}</p>
               )
           })
       }
           <form className="comment-form" onSubmit={this.handleSubmit}>
                <input type="text" placeholder="comment" name="comment"/>
                <input type="submit" hidden/>
           </form>

        </div>
    }
}

export default Comments
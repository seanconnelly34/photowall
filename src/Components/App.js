

import Main from './Main'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../redux/actions'
import {withRouter} from 'react-router'

//connects Main component to the store.
//taking state of/from the store from Main and mapping it into props to be used.
function mapStateToProps(state){
    return{
        posts: state.posts,
        comments:state.comments
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(actions, dispatch)
}

//injects the props into Main component
const App = withRouter(connect(mapStateToProps, mapDispatchToProps)(Main))

export default App
import {database} from '../database/config'

export function startAddingPost(post){
    return (dispatch) => {
        return database.ref('posts').update({[post.id]:post}).then(() =>{
            dispatch(addPost(post))
        }).catch((error) => {
            console.log(error)
        })
    }
}

export function addPost(post){
    return {
        type: 'ADD_POST',
        post
    }
}

//retrieve posts form database
export function startLoadingPost(){
    return (dispatch) => {
        return database.ref('posts').once('value').then((snapshot) => {
            let posts = []
            snapshot.forEach((childSnapshot) => {
                posts.push(childSnapshot.val())
            })
            dispatch(loadPosts(posts))
        }).catch((error) => {
            console.log(error)
        })
    }
}

//load posts onto redux store to render on UI
export function loadPosts(posts){
    return{
        type: 'LOAD_POSTS',
        posts
    }
}

//remove psot from databse
export function startRemovingPost(index, id){

    return (dispatch) =>{
        return database.ref(`posts/${id}`).remove().then(() =>{
            dispatch(removePost(index))
        }).catch((error) => {
            console.log(error)
        })
    }
}

//remove post func used in reducer to update sotre to remove from UI
export function removePost(index){
    return {
        type: 'REMOVE_POST', 
        index 
    }
}

export function startLoadingComments(){
    return (dispatch) => {
        return database.ref('comments').once('value').then((snapshot) => {
            let comments = {}
            snapshot.forEach((childSnapshot) => {
                comments[childSnapshot.key] = Object.values(childSnapshot.val())
            })
            dispatch(loadComments(comments))
        }).catch((error) => {
            console.log(error)
        })
    }
}

export function loadComments(comments){
    return{
        type: 'LOAD_COMMENTS',
        comments
    }
}

export function startAddingComment(comment, postId){
    return (dispatch) => {
        return database.ref('posts/'+postId+'/comment').push(comment).then(() => {
            dispatch(addComment(comment, postId))
        }).catch((error) => {
            console.log(error)
        })
    }
}


export function addComment(comment, postId){
    return{
        type: 'ADD_COMMENT',
        comment,
        postId
    }
}





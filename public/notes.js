
// const element = React.createElement('h1', null, 'Hello World!');


// const element = React.createElement('ol', null, 
//     React.createElement('li', null, 'Take out the trash'),
//     React.createElement('li', null, 'Shovel the driveway'),
//     React.createElement('li', null, 'Walk the dog')
// );

//const tasks = ['take out trash', 'shovel the driveway', 'walk the dog'];

//1 way to do it
// const element = React.createElement('ol', null, 
//     tasks.map((task, index) => React.createElement('li', {key:index}, task))
// );

//second way hard code
// const elements = <ol>
//     <li>{tasks[0]}</li>
//     <li>{tasks[1]}</li>
//     <li>{tasks[2]}</li>
// </ol>

//third way with 'jsx'
// const element = <ol>
//     { tasks.map((task, index) => <li key = {index}> {task} </li>)}
// </ol>

//every jsk element must be in one element (lists and h1 for example), so wrap in a div tag.
// const element = 
// <div>
//     <h1>Task List</h1>
//     <ol>
//     { tasks.map((task, index) => <li key = {index}> {task} </li>)}
//     </ol>
// </div>
import * as React from "react";
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UserList } from './Users';
import { PostList, PostEdit, PostCreate } from './posts'
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import Dashboard from './Dashboard';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const App = () => (

<Admin dashboard= {Dashboard} dataProvider={dataProvider}>
<Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon}/>
    <Resource name="users" list={UserList} icon={UserIcon}/>
    </Admin>
);
export default App;



// Resource name= users informs react-admin to fetch the users
// record from the api. resource also tells react comps to use 
// CRUD ops. 
// list = {ListGuesser} prop means dat react-admin
// shud use same to display the list of posts.

//da ListGuesser comp isnt meant to be used in production
// build custome react component listguesser dumps guess code  in console
//EditGuesser for edit and create

import * as React from "react";
import { Admin, Resource} from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UserList } from './Users';
import { PostList } from './posts'

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const App = () => (
<Admin dataProvider={dataProvider}>
<Resource name="posts" list={PostList} />
    <Resource name="users" list={UserList} />
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


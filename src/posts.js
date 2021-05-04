import  * as React from 'react';
import {
    Filter, 
    List,
    SimpleList, 
    Datagrid, 
    TextField, 
    ReferenceField, 
    EditButton,
    Edit,
    Create,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput,
 } from 'react-admin';

 const PostFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);




export const PostList = (props) => (
    <List filters= {<PostFilter />} {...props}>
        {/* <Datagrid rowClick="edit"> */}
            <Datagrid>
                <TextField source="id" />
            <ReferenceField source="userId" reference="users">
                {/* <TextField source="id" /> */}
                <TextField source="name" />
                </ReferenceField>
            {/* <TextField source="id" /> */}
            {/* <TextField source="name" /> */}
            <TextField source="title" />
            {/* <TextField source="body" /> */}
            <EditButton />
        </Datagrid>
    </List>
);


export const PostEdit = props => (
    <Edit title={<PostTitle />} {...props}>
        <SimpleForm>
        <TextInput disabled source="id" />

            <ReferenceInput source="userId" reference="users">
                {/* <SelectInput optionText="id" /> */}
                <SelectInput optionText="name" />

            </ReferenceInput>
            <TextInput source="id" />
            <TextInput source="title" />
            {/* <TextInput source="body" /> */}
            <TextInput multiline source="body" />
        </SimpleForm>
    </Edit>
);

const PostTitle = ({ record }) => {
    return <span>Post {record ? `"${record.title}"` : ' '}</span>;
};


export const PostCreate = props => (
    <Create {...props}>
        <SimpleForm>
        <TextInput disabled source="id" />

            <ReferenceInput source="userId" reference="users">
                {/* <SelectInput optionText="id" /> */}
                <SelectInput optionText="name" />

            </ReferenceInput>
            <TextInput source="id" />
            <TextInput source="title" />
            {/* <TextInput source="body" /> */}
            <TextInput multiline source="body" />
        </SimpleForm>
    </Create>
);



// The Reference Field fetches the reference data and passes
// it as a record to its child component
// Just like the list, reference comps responsible 4 fetching 
// and preparing data and delegate rendering to their choldren


// to finish the postlist, place the post id field as a 
// 1st column, & remove da body field. UX demands datagrid 
// shudnt contain large chunks of text.




//Supporting Mobile Devices

// import * as React from "react";
// import { List, SimpleList } from 'react-admin';

// export const PostList = (props) => (
//     <List {...props}>
//         <SimpleList
//             primaryText={record => record.title}
//             secondaryText={record => `${record.views} views`}
//             tertiaryText={record => new Date(record.published_at).toLocaleDateString()}
//         />
//     </List>
// );

// replace data grid by simpleList for mobile app






// Action 	Expected API request
// Get list 	GET http://my.api.url/posts?sort=["title","ASC"]&range=[0, 24]&filter={"title":"bar"}
// Get one record 	GET http://my.api.url/posts/123
// Get several records 	GET http://my.api.url/posts?filter={"id":[123,456,789]}
// Get related records 	GET http://my.api.url/posts?filter={"author_id":345}
// Create a record 	POST http://my.api.url/posts
// Update a record 	PUT http://my.api.url/posts/123
// Update records 	PUT http://my.api.url/posts?filter={"id":[123,124,125]}
// Delete a record 	DELETE http://my.api.url/posts/123
// Delete records 	DELETE http://my.api.url/posts?filter={"id":[123,124,125]}

// React-admin calls the Data Provider with one method for each of the actions of this list, and expects a Promise in return. These methods are called getList, getOne, getMany, getManyReference, create, update, updateMany, delete, and deleteMany. It’s the Data Provider’s job to emit HTTP requests and transform the response into the format expected by react-admin.

// The code for a Data Provider for the my.api.url API is as follows:

// import { fetchUtils } from 'react-admin';
// import { stringify } from 'query-string';

// const apiUrl = 'https://my.api.com/';
// const httpClient = fetchUtils.fetchJson;

// export default {
//     getList: (resource, params) => {
//         const { page, perPage } = params.pagination;
//         const { field, order } = params.sort;
//         const query = {
//             sort: JSON.stringify([field, order]),
//             range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
//             filter: JSON.stringify(params.filter),
//         };
//         const url = `${apiUrl}/${resource}?${stringify(query)}`;

//         return httpClient(url).then(({ headers, json }) => ({
//             data: json,
//             total: parseInt(headers.get('content-range').split('/').pop(), 10),
//         }));
//     },

//     getOne: (resource, params) =>
//         httpClient(`${apiUrl}/${resource}/${params.id}`).then(({ json }) => ({
//             data: json,
//         })),

//     getMany: (resource, params) => {
//         const query = {
//             filter: JSON.stringify({ id: params.ids }),
//         };
//         const url = `${apiUrl}/${resource}?${stringify(query)}`;
//         return httpClient(url).then(({ json }) => ({ data: json }));
//     },

//     getManyReference: (resource, params) => {
//         const { page, perPage } = params.pagination;
//         const { field, order } = params.sort;
//         const query = {
//             sort: JSON.stringify([field, order]),
//             range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
//             filter: JSON.stringify({
//                 ...params.filter,
//                 [params.target]: params.id,
//             }),
//         };
//         const url = `${apiUrl}/${resource}?${stringify(query)}`;

//         return httpClient(url).then(({ headers, json }) => ({
//             data: json,
//             total: parseInt(headers.get('content-range').split('/').pop(), 10),
//         }));
//     },

//     update: (resource, params) =>
//         httpClient(`${apiUrl}/${resource}/${params.id}`, {
//             method: 'PUT',
//             body: JSON.stringify(params.data),
//         }).then(({ json }) => ({ data: json })),

//     updateMany: (resource, params) => {
//         const query = {
//             filter: JSON.stringify({ id: params.ids}),
//         };
//         return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
//             method: 'PUT',
//             body: JSON.stringify(params.data),
//         }).then(({ json }) => ({ data: json }));
//     },

//     create: (resource, params) =>
//         httpClient(`${apiUrl}/${resource}`, {
//             method: 'POST',
//             body: JSON.stringify(params.data),
//         }).then(({ json }) => ({
//             data: { ...params.data, id: json.id },
//         })),

//     delete: (resource, params) =>
//         httpClient(`${apiUrl}/${resource}/${params.id}`, {
//             method: 'DELETE',
//         }).then(({ json }) => ({ data: json })),

//     deleteMany: (resource, params) => {
//         const query = {
//             filter: JSON.stringify({ id: params.ids}),
//         };
//         return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
//             method: 'DELETE',
//         }).then(({ json }) => ({ data: json }));
//     }
// };

// Tip: fetchUtils.fetchJson() is just a shortcut for fetch().then(r => r.json()), plus a control of the HTTP response code to throw an HTTPError in case of 4xx or 5xx response. Feel free to use fetch() directly if it doesn’t suit your needs.

// Using this provider instead of the previous jsonServerProvider is just a matter of switching a function:

// // in src/app.js
// import dataProvider from './dataProvider';

// const App = () => (
//     <Admin dataProvider={dataProvider}>
//         // ...
//     </Admin>
// );

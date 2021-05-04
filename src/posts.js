import  * as React from 'react';
import {
    Filter, 
    List, 
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
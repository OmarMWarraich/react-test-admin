import  * as React from 'react';
import { List, Datagrid, TextField, ReferenceField, EditButton } from 'react-admin';

export const PostList = props => (
    <List {...props}>
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



// The Reference Field fetches the reference data and passes
// it as a record to its child component
// Just like the list, reference comps responsible 4 fetching 
// and preparing data and delegate rendering to their choldren


// to finish the postlist, place the post id field as a 
// 1st column, & remove da body field. UX demands datagrid 
// shudnt contain large chunks of text.
import { Card, Grid, Input } from 'semantic-ui-react';
import React, { useState, useEffect} from 'react';


export default function Vehicles({data}) {
    const[searchText, setSearchText] = useState('');
    const[filteredList, setFilteredList] = useState([]);
    useEffect(() => {
     setFilteredList(data);
    }, [data]);

    const search = (value) => {
        setSearchText(value);
        const filteredData = data.filter((veicle) => {
            return veicle.name.toLowerCase().includes(value.toLowerCase());
        });
     setFilteredList(filteredData);
    }
  return (
    <>
        <h1>Vehicles</h1>
        <Input
         icon={{name: 'search', circular: true, link: true}}
         placeholder='Search'
         value={searchText}
         onChange={(e) => search(e.target.value) }
        />
     <br/>
     <br/>

    <Grid columns={3}>
        {filteredList.map((vehicles, i) =>{
            return(
                <Grid.Column key={i}>
                    <Card>
                        <Card.Content>
                            <Card.Header>{vehicles.name}</Card.Header>
                            <Card.Description>
                                <strong>Model</strong>
                                <p>{vehicles.model}</p>
                                <strong>Created</strong>
                                <p>{vehicles.created}</p>
                                <strong>Name</strong>
                                <p>{vehicles.name}</p>
                            </Card.Description>
                        </Card.Content>
                    </Card>
                </Grid.Column>
            )
        })}
    </Grid>
</>
);
}
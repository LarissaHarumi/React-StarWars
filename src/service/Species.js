import { Card, Grid, Input } from 'semantic-ui-react';
import React, { useState, useEffect} from 'react';

export default function Species({data}) {
    const[searchText, setSearchText] = useState('');
    const[filteredList, setFilteredList] = useState([]);
    useEffect(() => {
     setFilteredList(data);
    }, [data]);

    const search = (value) => {
        setSearchText(value);
        const filteredData = data.filter((specie) => {
            return specie.name.toLowerCase().includes(value.toLowerCase());
        });
     setFilteredList(filteredData);
    }

  return (
    <>
    <h1>Species</h1>
     <Input
         icon={{name: 'search', circular: true, link: true}}
         placeholder='Search'
         value={searchText}
         onChange={(e) => search(e.target.value) }
        />
     <br/>
     <br/>

    <Grid columns={3}>
        {filteredList.map((species, i) =>{
            return(
                <Grid.Column key={i}>
                    <Card>
                        <Card.Content>
                            <Card.Header>{species.name}</Card.Header>
                            <Card.Description>
                                <strong>Name</strong>
                                    <p>{species.name}</p>
                                    <strong>Homeworld</strong>
                                    <p>{species.homeworld}</p>
                                    <strong>Created</strong>
                                    <p>{species.created}</p>
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

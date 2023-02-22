import { Card, Grid, Input} from 'semantic-ui-react';
import React,{useState, useEffect} from 'react';

export default function People({data}) {
    const[searchText, setSearchText] = useState('');
    const[filteredList, setFilteredList] = useState([]);
    useEffect(() => {
     setFilteredList(data);
    }, [data]);
    const search = (value) => {
     setSearchText(value);
     const filteredData = data.filter((people) => {
         return people.name.toLowerCase().includes(value.toLowerCase());
        });
     setFilteredList(filteredData);
    }
  return (
    <>
    <h1>People</h1>
    <Input
         icon={{name: 'search', circular: true, link: true}}
         placeholder='Search'
         value={searchText}
         onChange={(e) => search(e.target.value) }
        />
    <br/>
    <br/>
    <Grid columns={3}>
        {filteredList.map((people, i) =>{
            return(
                <Grid.Column key={i}>
                    <Card>
                        <Card.Content>
                            <Card.Header>{people.name}</Card.Header>
                            <Card.Description>
                                <strong>Height</strong>
                                <p>{people.height}</p>
                                <strong>Mass</strong>
                                <p>{people.mass}</p>
                                <strong>Hair Color</strong>
                                <p>{people.hair_color}</p>
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

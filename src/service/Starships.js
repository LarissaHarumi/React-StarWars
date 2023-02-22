import { Card, Grid,Input } from 'semantic-ui-react';
import React,{ useState, useEffect} from 'react';

export default function Starships({data}) {
    const[searchText, setSearchText] = useState('');
    const[filteredList, setFilteredList] = useState([]);
    useEffect(() => {
     setFilteredList(data);
    }, [data]);

    const search = (value) => {
        setSearchText(value);
        const filteredData = data.filter((starchips) => {
            return starchips.name.toLowerCase().includes(value.toLowerCase());
        });
     setFilteredList(filteredData);
    }
  return (
    <>
    <h1>Starships</h1>
    <Input
     icon={{name: 'search', circular: true, link: true}}
     placeholder='Search'
     value={searchText}
     onChange={(e) => search(e.target.value) }
    />
    <br/>
    <br/>
    <Grid columns={3}>
        {filteredList.map((starships, i) =>{
            return(
                <Grid.Column key={i}>
                    <Card>
                        <Card.Content>
                            <Card.Header>{starships.name}</Card.Header>
                            <Card.Description>
                                <strong>Model</strong>
                                <p>{starships.model}</p>
                                <strong>Created</strong>
                                <p>{starships.created}</p>
                                <strong>Name</strong>
                                <p>{starships.name}</p>
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
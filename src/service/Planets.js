import { Card, Grid, Input} from 'semantic-ui-react';
import React, {useState, useEffect} from 'react';


export default function Planets({data}) {
    const[searchText, setSearchText] = useState('');
    const[filteredList, setFilteredList] = useState([]);
    useEffect(() => {
     setFilteredList(data);
    }, [data]);
    const search = (value) => {
        setSearchText(value);
        const filteredData = data.filter((planet) => {
            return planet.name.toLowerCase().includes(value.toLowerCase());
        });
        setFilteredList(filteredData);
    }

  return (
    <>
    <h1>Planets</h1>
    <Input
        icon={{name: 'search', circular: true, link: true}}
        placeholder='Search'
        value={searchText}
        onChange={(e) => search(e.target.value) }
        />
     <br/>
     <br/>
    <Grid columns={3}>
        {filteredList.map((planets, i) =>{
            return(
                <Grid.Column key={i}>
                    <Card>
                        <Card.Content>
                            <Card.Header>{planets.name}</Card.Header>
                            <Card.Description>
                                <strong>Climate</strong>
                                <p>{planets.climate}</p>
                                <strong>Diameter</strong>
                                <p>{planets.diameter}</p>
                                <strong>Population</strong>
                                <p>{planets.population}</p>
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

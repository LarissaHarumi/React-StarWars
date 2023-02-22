import { Card, Grid,Input } from 'semantic-ui-react';
import React, { useState, useEffect} from 'react';

export default function Films({data}) {
    const [searchText, setSearchText] = useState('');
    const [filteredList, setFilteredList] = useState([]);
    useEffect(() => {
        setFilteredList(data);
    
      }, [data]);
    const search = (value) => {
        setSearchText(value);
        const filteredData = data.filter((film) => {
            return film.title.toLowerCase().includes(value.toLowerCase());
        });
        setFilteredList(filteredData);
    }
  return (
    <>
    <h1>Films</h1>
    <Input
        icon={{name: 'search', circular: true, link: true}}
        placeholder='Search'
        value={searchText}
        onChange={(e) => search(e.target.value) }
     />
     <br/>
     <br/>

    <Grid columns={3}>
        {filteredList.map((films, i) =>{
            return(
                <Grid.Column key={i}>
                    <Card>
                        <Card.Content>
                            <Card.Header>{films.name}</Card.Header>
                            <Card.Description>
                                <strong>Title</strong>
                                <p>{films.title}</p>
                                <strong>Producer</strong>
                                <p>{films.producer}</p>
                                <strong>Release Date</strong>
                                <p>{films.release_date}</p>
                            </Card.Description>
                        </Card.Content>
                    </Card>
                </Grid.Column>
            )
        })}
    </Grid>
</>
  )
}

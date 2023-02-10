import React from 'react';
import { Card, Grid } from 'semantic-ui-react';


export default function Films({data}) {
  return (
    <>
    <h1>Films</h1>
    <Grid columns={3}>
        {data.map((films, i) =>{
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

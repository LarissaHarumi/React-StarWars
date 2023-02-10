import React from 'react';
import { Card, Grid } from 'semantic-ui-react';

export default function Starships({data}) {
  return (
    <>
        <h1>Starships</h1>
        <Grid columns={3}>
            {data.map((starships, i) =>{
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
import React from 'react'
import { Card, Grid } from 'semantic-ui-react';

export default function Species({data}) {
  return (
    <>
        <h1>Species</h1>
        <Grid columns={3}>
            {data.map((species, i) =>{
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

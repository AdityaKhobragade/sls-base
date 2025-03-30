// src/handlers/createAuction.js

async function createAuction( event, context ) {
  const { title } = JSON.parse( event.body );
  const now = new Date();

  const auction = {
    title,
    status: 'open',  // Make sure 'open' is a string
    createdAt: now.toISOString(),
  };

  console.log( "***auction = ", auction );


  return {
    statusCode: 201,
    body: JSON.stringify( { auction } ),
  };
}

export const handler = createAuction;

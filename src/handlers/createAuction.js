import { v4 as uuid } from 'uuid'
import AWS from 'aws-sdk'

const dynamodb = new AWS.DynamoDB.DocumentClient();

async function createAuction( event, context ) {
  const { title } = JSON.parse( event.body );
  const now = new Date();

  const auction = {
    id: uuid(),
    title,
    status: 'open',  // Make sure 'open' is a string
    createdAt: now.toISOString(),
  };

  console.log( "***auction = ", auction );

  await dynamodb.put( {
    TableName: 'AuctionTable',
    Item: auction
  } ).promise();

  return {
    statusCode: 201,
    body: JSON.stringify( { auction } ),
  };
}

export const handler = createAuction;

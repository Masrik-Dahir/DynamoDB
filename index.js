const { v4: uuidv4 } = require('uuid');
const AWS = require("aws-sdk");
AWS.config.update ({region: "us-east-1"});

const dynamodb = new AWS.DynamoDB.DocumentClient();

// // 1. Create an organization
// const happyIncOrgId = "c89608cf-39a7-4589-9eea-173ae87192da";
// const orgId = uuidv4();

// var params = {
//     TableName : 'happy-projects',
//     Item: {
//        PK: `ORG#${happyIncOrgId}`,
//        SK: `#METADATA#${orgId}`,
//        name: "Made to Delete",
//        tier: "professional"
//     }
//   };
    
// dynamodb.put(params, function(err, data) {
//     if (err) console.log(err);
//     else console.log(data);
// });


// // 2. Create an agile project in Happy Inc
// const happyIncOrgId = "c89608cf-39a7-4589-9eea-173ae87192da";
// const projectId = uuidv4();

// var params = {
//     TableName : 'happy-projects',
//     Item: {
//        PK: `ORG#${happyIncOrgId}`,
//        SK: `PRO#agile${projectId}`,
//        name: "Project x",
//        project_id: projectId
//     }
//   };
  
// dynamodb.put(params, function(err, data) {
//     if (err) console.log(err);
//     else console.log(data);
// });


// // 3. Update an organizaiton
// const happyIncOrgId = "c89608cf-39a7-4589-9eea-173ae87192da";
// var params = {
//     TableName: 'happy-projects',
//     Key: { PK : `ORG#${happyIncOrgId}`, SK: `#METADATA#${happyIncOrgId}`},
//     UpdateExpression: 'set #name = :name',
//     ExpressionAttributeNames: {'#name' : 'name'},
//     ExpressionAttributeValues: {
//       ':name' : "Updated",
//     }
//   };
  
//   dynamodb.update(params, function(err, data) {
//      if (err) console.log(err);
//      else console.log(data);
//   });


// // 4. Get an organizaiton
// const happyIncOrgId = "c89608cf-39a7-4589-9eea-173ae87192da";
// var params = {
//     TableName : 'happy-projects',
//     Key: {
//         PK : `ORG#${happyIncOrgId}`, 
//         SK: `#METADATA#${happyIncOrgId}`
//     }
//   };
    
//   dynamodb.get(params, function(err, data) {
//     if (err) console.log(err);
//     else console.log(data);
//   });


// // 4. Get all organizaiton
// const happyIncOrgId = "c89608cf-39a7-4589-9eea-173ae87192da";
// var params = {
//     TableName: 'happy-projects',
//     KeyConditionExpression: '#PK = :PK and begins_with(#SK, :SK)',
//     ExpressionAttributeNames: {'#PK': 'PK', '#SK' : 'SK'},
//     ExpressionAttributeValues: {
//       ':PK': `ORG#${happyIncOrgId}`,
//       ':SK': `#METADATA#`
//     }
//   };
    
//   dynamodb.query(params, function(err, data) {
//      if (err) console.log(err);
//      else console.log(data);
//   });

// // Delete
// const PK_Id = "c89608cf-39a7-4589-9eea-173ae87192da";
// const SK_Id = "29853cbe-4e5b-418a-b0fe-e60b0654ec1d";
// var params = {
//     TableName : 'happy-projects',
//     Key: {
//         PK : `ORG#${PK_Id}`, 
//         SK: `#METADATA#${SK_Id}`
//     }
//   };
  
//   dynamodb.delete(params, function(err, data) {
//     if (err) console.log(err);
//     else console.log(data);
//   });
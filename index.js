const { v4: uuidv4 } = require('uuid');
const AWS = require("aws-sdk");
AWS.config.update ({region: "us-east-1"});

const dynamodb = new AWS.DynamoDB.DocumentClient();

// // 1. Create an organization
// const orgId = uuidv4();

// var params = {
//     TableName : 'happy-projects',
//     Item: {
//        PK: `ORG#${orgId}`,
//        SK: `#METADATA#${orgId}`,
//        name: "Happy Inc",
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


// 3. Edit an organizaiton
const happyIncOrgId = "c89608cf-39a7-4589-9eea-173ae87192da";
var params = {
    TableName: 'happy-projects',
    Key: { PK : `ORG#${happyIncOrgId}`, SK: `#METADATA#${happyIncOrgId}`},
    UpdateExpression: 'set #name = :name',
    ExpressionAttributeNames: {'#name' : 'name'},
    ExpressionAttributeValues: {
      ':name' : "Updated",
    }
  };
  
  var documentClient = new AWS.DynamoDB.DocumentClient();
  
  dynamodb.update(params, function(err, data) {
     if (err) console.log(err);
     else console.log(data);
  });
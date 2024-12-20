import { QueryCommand } from "@aws-sdk/lib-dynamodb";
import { ddbDocClient } from "./ddbDocClient.js";

/**
 * 
 */
export const handler = async (event, context) => {

    let params;
    switch (event.httpMethod){
        case "POST":
            payload = JSON.parse(event.body);
            params = {
                TableName: "ProductsDB",
                KeyConditionExpression: "Category = :c",
                ExpressionAttributeValues: {
                    ":c": payload.Category
                },
            };
            
            try {
                console.log("Getting products...");
                console.log(params);
                const data = await ddbDocClient.send(new QueryCommand(params));
                console.log("Retrieved products:", data.Items);
                
                return {
                statusCode: 200,
                body: JSON.stringify(data.Items)
                }
            } catch (err) {
                console.error(err);
                return {
                statusCode: 500,
                body: JSON.stringify(err)
                }
            };
            //CHANGE TO PUT ITEM IN DB LATER
        
        case "GET":
            const query = new URLSearchParams(event.rawQuery);
            params = {
                TableName: "ProductsDB",
                KeyConditionExpression: "Category = :c",
                ExpressionAttributeValues: {
                    ":c": query.get("Category")
                },
            };
            try {
                console.log("Getting products...");
                console.log(params);
                const data = await ddbDocClient.send(new QueryCommand(params));
                console.log("Retrieved products:", data.Items);
                
                return {
                statusCode: 200,
                body: JSON.stringify(data.Items)
                }
            } catch (err) {
                console.error(err);
                return {
                statusCode: 500,
                body: JSON.stringify(err)
                }
            };

        default:
            console.log(event);
            return{
                statusCode: 500,
                body: "unrecognized HTTP Method, must be one of GET/POST/PUT/DELETE."
            }
    }
}
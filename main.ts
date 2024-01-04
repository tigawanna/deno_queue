import { Edge } from "./repo/types.ts";


type GreetingRepoData = {
    message:"greeting"
    value: "hello"

  
}
type ComputeRepoData = {
    message:"compute-repo"
    value: Edge; 
    viewer_token: string
}

type QueueMessage = ComputeRepoData | GreetingRepoData


const db = await Deno.openKv();

db.listenQueue((msg) => {
const data = msg as QueueMessage;
    switch(data.message){
        case "greeting":
            console.log("queued up greeting launched");
            break;
        case "compute-repo":
            console.log("queued up compute-repo launched");
            break;
        default:    
    }

});




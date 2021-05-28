import Server from "./classes/server";
import { ENDPOINTS } from "./global/endpoints";
import router from './routes/router';
import bodyParser from 'body-parser';
import cors from 'cors';
const server = Server.instance;
// bodyParser
server.app.use( bodyParser.urlencoded({extended:true}) );
server.app.use( bodyParser.json());
// CORS
server.app.use( cors({ origin:true,credentials:true }))
// SETTING routes
server.app.use('/', router)
// START API Rest
server.start( ()=>{
    console.log(` Server running in port ${ server.port }`);
})
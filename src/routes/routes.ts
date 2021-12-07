import { 
    scanUrls
} from '../controllers/controller';

const routes = (app) => {      
    // POST /scanUrls endpoint
    app.route('/scan-urls')
    .post((req, res, next) => {
        // debugging
        console.log(`Request from: ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        next();
    }, scanUrls);
}

export default routes;

const routes = (app) => {
    // routeur de la page de contact     
    app.route('/contact')
        .get((req, res, next)=> {
            // Middleware
            console.log(`request from : ${req.originalUrl}`)
            console.log(`request type : ${req.method}`)
            next();
        }, ((req, res, next) => {
            res.send('GET request successfull !');
        }))

        .post((req, res, next)=> {
            // Middleware
            console.log(`request from : ${req.originalUrl}`)
            console.log(`request type : ${req.method}`)
            next();
        },  ((req, res, next) => {
            res.send('POST request successfull !');
        }))    
    
    // routeur de la page de contact paramétrée par l'id du contact
    app.route('/contact/:contactId')
        .put((req, res, next)=> {
            // Middleware
            console.log(`request from : ${req.originalUrl}`)
            console.log(`request type : ${req.method}`)
            next();
        }, ((req, res, next) => {
            res.send('PUT request successfull !');
        }))

        .delete((req, res, next)=> {
            // Middleware
            console.log(`request from : ${req.originalUrl}`)
            console.log(`request type : ${req.method}`)
            next();
        },  ((req, res, next) => {
            res.send('DELETE request successfull !');
        }))
  
}


export default routes;
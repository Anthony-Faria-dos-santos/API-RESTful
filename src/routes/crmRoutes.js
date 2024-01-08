const routes = (app) => {
    app.route('/contact')
    .get((req, res)=>
        res.send('GET request successfull !'))
}


export default routes;
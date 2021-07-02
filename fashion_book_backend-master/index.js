const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const userRouter = require('./api/routers/user.router');
const categoryRouter = require('./api/routers/categoy.router');
const publisherRouter = require('./api/routers/publisher.router');
const bookRouter = require('./api/routers/book.router');
const authorRouter = require('./api/routers/author.router');
const commentRouter = require('./api/routers/comment.router');
const billRouter = require('./api/routers/bill.router');
const cartRouter = require('./api/routers/cart.router');
const adminRouter = require('./api/routers/admin.router');
const addressVnRouter = require('./api/routers/addres.vn.router');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/fashion_book_db');
const address = require('./api/models/address.vn.model');
const test = () => {
    Object.keys(data).forEach( function(k){
        var _dic = [];
        var _ward = [];
         Object.keys(data[k].district).forEach(function(j) {
            Object.keys(data[k].district[j].ward).forEach( function(l) {
                _ward.push({
                    name: data[k].district[j].ward[l].name,
                    code: data[k].district[j].ward[l].code,
                })
            });
            _dic.push({
                name: data[k].district[j].name,
                code: data[k].district[j].code,
                ward: _ward
            })
            
        });
        const new_address = new address({
            city: data[k].name,
            district: _dic,
            code: data[k].code
        })
        try {
            new_address.save()
        }
        catch(Err) {
            console.log(Err)
        }
    });
}
// test();
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
app.use(cors())

userRouter(app);
categoryRouter(app);
publisherRouter(app);
bookRouter(app);
authorRouter(app);
commentRouter(app)
billRouter(app);
cartRouter(app);
adminRouter(app);
addressVnRouter(app);
app.get('/', (req, res) => {res.send('welcome to fashtion_book')})

app.listen(port, () => console.log("server running on port " + port));
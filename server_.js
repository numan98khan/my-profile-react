
2
3
4
5
6
7
8
9
app.use(bodyParser.json());
app.post('/',function (request, response) {
//  console.log(request.body);
 if('data' in request.body[0]){
   if('validationCode' in request.body[0].data) {
     webhook_res = {'validationResponse': request.body[0].data.validationCode}
     console.log('Azure EventGrid subscription successfully validated')
     response.send(webhook_res);
   }
     if(request.body[0].data.api=='PutBlob'){
       console.log('&gt;&gt; Blob uploaded - %s', request.body[0].data.url)
     }
     if(request.body[0].data.api=='DeleteBlob'){
       console.log('&gt;&gt; Blob deleted - %s', request.body[0].data.url)
     }
     response.send();
     response.end();
   }
});
var server = app.listen(process.env.PORT || '8000', function () {
 console.log('App listening on port %s', server.address().port);
 console.log('Press Ctrl+C to quit.');
});

     if(request.body[0].data.api=='PutBlob'){
       console.log('&gt;&gt; Blob uploaded - %s', request.body[0].data.url)
     }
     if(request.body[0].data.api=='DeleteBlob'){
       console.log('&gt;&gt; Blob deleted - %s', request.body[0].data.url)
     }
     response.send();
     response.end();
   }
});
var server = app.listen(process.env.PORT || '8000', function () {
 console.log('App listening on port %s', server.address().port);
 console.log('Press Ctrl+C to quit.');
});
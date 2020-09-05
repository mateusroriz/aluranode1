module.exports = (app) =>{

    app.get('/', function(req,resp){
        resp.send(`
            <html>
                 <Head>
                     <meta charset = "utf-8"/>
                 </Head>
                 <Body>
                     <h1>Primeira tela</h1>
                 </Body>
             </html>
        `);
    });
    
    
    app.get('/livros', function(req, resp) {
        resp.marko(
            require('../views/livros/lista/lista.marko'),
            {
                livros: [
                    { 
                        id: 1,
                        titulo: 'Fundamentos do Node'
                    },
                    { 
                        id: 2,
                        titulo: 'Node Avançado'
                    }
                ]
            }
    
        );
    });
}
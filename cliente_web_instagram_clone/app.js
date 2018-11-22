/* importar as configurações do servidor */
var app = require('./config/server');

/* parametrizar a porta de escuta */
app.listen(80, function(){
	console.log('Servidor online');
})

// rodar com o sudo pois precisa de privilegios sudo npm start 
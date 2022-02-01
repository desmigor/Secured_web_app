const {Client} = require('pg')
const client = new Client({
	user: "postgres",
	password: "mypass",
	host: "localhost",
	port: 5432,
	database: "postgres"
})

client.connect()
.then(() => console.log("Connected successfuly"))
.catch(e => console.log(e))
//.finally(() => client.end())

//Tsting the database connection
client.query(
	"INSERT INTO credentials(user_id, email, name, password)VALUES(0, 'hi@gmail.com', 'Tom Hikes', 'strongpass')",
	(err, res) => {
	  console.log(err, res);
	  client.end();
	}
);
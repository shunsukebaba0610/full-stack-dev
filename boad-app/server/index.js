const express = require('express');
const app = express();
const cors = require('cors');
const db = require('./models');
const portNumber = 3001;

app.use(express.json())
app.use(cors());

const postRouter = require('./routes/Posts');
app.use("/posts", postRouter);

const commentRouter = require('./routes/Comment');
app.use("/comments", commentRouter);

db.sequelize.sync().then(() => {
	app.listen(portNumber, () => {
		console.log("Server running on port " + portNumber);
	});
});

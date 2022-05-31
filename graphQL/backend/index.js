const { ApolloServer, gql } = require("apollo-server");

const books = [
	{
		title: "ドラコンボール",
		author: "鳥山明",
	},
	{
		title: "ワンピース",
		author:"尾田栄一郎"
	},
	{
		title: "ベルセルク",
		author: "三浦健太郎",
	},
	{
		title: "SPYxFAMILY",
		author: "遠藤達哉",
	},
];

const typeDefs = gql`
	type Book {
		title: String
		author: String
	}

	type Query{
		test: [Book]
	}
`;

const resolvers = {
	Query: {
		test: () => books 
	}
}

const server = new ApolloServer({typeDefs, resolvers});

server.listen().then(({url})=>{
	console.log(`Server ready at ${ url }`);
});
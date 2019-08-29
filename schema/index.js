const graphql = require("graphql")
const Books = require("../models/book");

const {
    GraphQLObjectType, 
    GraphQLString, 
    GraphQLSchema,
    GraphQLID,
    GraphQLList,
    GraphQLNonNull
} = graphql;

const Novels = new GraphQLObjectType({
    name: 'Novels',
    fields: () => ({
        id: {type: GraphQLID},
        title: {type: GraphQLString},
        authors: {type: GraphQLString},
        synopsis: {type: GraphQLString},
        image: {type: GraphQLString},
        link: {type: GraphQLString},
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        authors: {
            type: new GraphQLList(Novels),
            args: {id: {type: GraphQLString}},
            resolve(parent, args) {

            return Books.find({authors: args.id})
            }
        },
        novels: {
            type: new GraphQLList(Novels),
            resolve(parent, args) {

                return Books.find({})
            }
        }
    }
});

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addNovel: {
            type: Novels,
            args: {
                title: {type: new GraphQLNonNull(GraphQLString)},
                authors: {type: new GraphQLNonNull(GraphQLString)},
                id:  {type: new GraphQLNonNull(GraphQLString)},
                synopsis: {type: GraphQLString},
                image: {type: GraphQLString},
                link: {type: GraphQLString}
            },
            resolve(parent, args) {
                let book = new Books({
                    title: args.title,
                    authors: args.authors,
                    id: args.id,
                    synopsis: args.synopsis,
                    image: args.image,
                    link: args.link
                })
                return book.save();
            }
        },
        deleteNovel: {
            type: Novels,
            args: {
                link: {type: new GraphQLNonNull(GraphQLString)},
            },
            resolve: (parent, args) => {
                return Books.deleteOne({ link: args.link });
            }
        }
    }
});

const MutationType = new GraphQLObjectType({
    name: "MutationType",
    fields: () => ({
        deleteNovel: {
            type: Novels,
            args: {
                id: { type: new GraphQLNonNull(GraphQLString)}
            },
            resolve: (value, { id }) => {
                return ArticleServices.delete({ link: id});
            }
        }
    }),
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});
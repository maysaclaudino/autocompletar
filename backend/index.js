import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import channels from './canais-de-programacao.json' assert { type: 'json' };

const typeDefs = `
  type Channel {
    CANAL: String!,
    CLASSIFICACAO_CANAL: String,
    CNPJ_PROGRAMADORA: String,
    CLASSIFICACAO_PROGRAMADORA: String,
    NR_IDENTIFICACAO: String,
    OFERTA_CLIENTE: String,
    DENSIDADE_CANAL: String,
    PAIS_PROGRAMADORA: String,
    TIPO_CONTEUDO_CANAL: String,
    NOME_PROGRAMADORA: String,
    DATA_INICIO_OFERTA: String,
  }

  type Query {
    channels: [Channel]
    channelsLimited(limit: Int): [Channel]
    channelsWithPrefix(prefix: String, limit: Int): [Channel]
  }
`;

const resolvers = {
  Query: {
    channels() {
      return channels;
    },

    channelsLimited(_, { limit }) {
      return channels.slice(0, limit);
    },

    channelsWithPrefix(_, args) {
      const prefix = args.prefix.toUpperCase();
      const limit = args.limit;

      const channelsList = channels.filter((str) => str.CANAL.startsWith(prefix));
      return channelsList.slice(0, limit);
    }
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});


console.log(`Server ready at: ${url}`);
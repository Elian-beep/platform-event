import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o8lqap18zz01xm156154s4/master',
    cache: new InMemoryCache()
});
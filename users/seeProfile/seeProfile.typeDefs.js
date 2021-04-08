import { gql } from "apollo-server";

// synchronize prisma
export default gql`
    type Query {
        seeProfile(username : String) : User
    }
`
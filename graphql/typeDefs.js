const { gql } = require("apollo-server");

const typeDefs = gql(`
type Student {
    id: ID!
    name: String!
    class: String!
}
type Query {
    students: [Student]
    student(id: ID!): Student
}
input StudentInput{
    name: String!
    class: String!
}
type Mutation {
    createStudent(studentInput:StudentInput): Student
    updateStudent(id:ID!,studentInput:StudentInput): Student
    deleteStudent(id:ID!): Student

}
`);

module.exports = typeDefs;

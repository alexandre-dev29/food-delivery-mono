import { GraphQLScalarType } from 'graphql';

export interface FileUpload {
  fileElement: File;
}

export const GraphQLUpload = new GraphQLScalarType({
  name: 'Upload',
  description: 'The `Upload` scalar type represents a file upload.',
  async parseValue(value: Promise<File>): Promise<File> {
    return value;
  },
  parseLiteral(ast: any) {
    console.log(ast);

    return GraphQLUpload.parseLiteral(ast, ast.value);
  },
  serialize(value) {
    console.log(value);
    return GraphQLUpload.serialize(value);
  },
});

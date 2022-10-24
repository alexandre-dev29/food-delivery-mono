import { GraphQLScalarType } from 'graphql';
import { Readable } from 'stream';

export interface FileUpload {
  filename: string;
  mimetype: string;
  encoding: string;
  createReadStream: () => Readable;
}

export const GraphQLUpload = new GraphQLScalarType({
  name: 'Upload',
  description: 'The `Upload` scalar type represents a file upload.',
  async parseValue(value: Promise<FileUpload | any>): Promise<FileUpload> {
    console.log(value);
    return GraphQLUpload.parseValue(value);
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

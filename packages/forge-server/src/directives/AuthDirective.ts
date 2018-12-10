import { SchemaDirectiveVisitor } from 'graphql-tools';
import {
  defaultFieldResolver,
  GraphQLObjectType,
  GraphQLInterfaceType,
} from 'graphql';
import { AuthenticationError } from 'apollo-server';

export class AuthDirective extends SchemaDirectiveVisitor {
  public visitObject(object: GraphQLObjectType) {
    this.ensureFieldsWrapped(object);
  }

  public visitFieldDefinition(
    _: any,
    details: {
      objectType: GraphQLObjectType | GraphQLInterfaceType;
    }
  ) {
    this.ensureFieldsWrapped(details.objectType);
  }

  protected ensureFieldsWrapped(
    objectType: (GraphQLObjectType | GraphQLInterfaceType) & {
      _wrappedAuth?: boolean;
    }
  ) {
    if (objectType._wrappedAuth) {
      return;
    } else {
      objectType._wrappedAuth = true;
    }
    const fields = objectType.getFields();
    Object.keys(fields).forEach(fieldName => {
      const field = fields[fieldName];
      const { resolve = defaultFieldResolver } = field;
      field.resolve = async function(...args) {
        const { user } = args[2];
        if (!user) {
          throw new AuthenticationError('Access denied.');
        }
        return resolve.apply(this, args);
      };
    });
  }
}

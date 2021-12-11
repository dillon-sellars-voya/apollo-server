import type { DocumentNode, GraphQLSchema } from 'graphql';
import type { IReferencedFieldsForType } from 'apollo-reporting-protobuf';

export function getReferencedFieldsByType({
  document,
  schema,
  resolvedOperationName,
}: {
  document: DocumentNode;
  resolvedOperationName: string | null;
  schema: GraphQLSchema;
}): Record<string, IReferencedFieldsForType> {
  return { SomeType: { fieldNames: ['someField', 'someOtherField'] } };
}

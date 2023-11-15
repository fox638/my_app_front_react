import { createEffect } from "effector";
import { graphql } from "../gql";
import { client } from "../client";
import { AuthLoginInput, AuthSignUpInput } from "../gql/graphql";

const registrationMutation = graphql(/* GraphQL */ `
  mutation registrationMutation($input: AuthSignUpInput!) {
    auth {
      signUp(input: $input) {
        ok
        errors {
          __typename
          ... on ErrorMessage {
            message
          }

          ... on FormError {
            fieldName
            message
          }
        }
      }
    }
  }
`);

export const registrationFx = createEffect(async (input: AuthSignUpInput) => {
  return await client
    .mutation(registrationMutation, { input })
    .then((resp) => resp?.data?.auth?.signUp);
});

const loginMutation = graphql(/* GraphQL */ `
  mutation loginUser($input: AuthLoginInput!) {
    auth {
      login(input: $input) {
        ok
        errors {
          __typename
          ... on ErrorMessage {
            message
          }
          ... on FormError {
            fieldName
            message
          }
        }
        user {
          username
        }
      }
    }
  }
`);

export const loginUserFx = createEffect(async (input: AuthLoginInput) => {
  return await client
    .mutation(loginMutation, { input })
    .then((resp) => resp?.data?.auth?.login);
});

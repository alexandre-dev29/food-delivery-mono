'use client';
import { Button, Card, Col, Input, Text } from '@nextui-org/react';
import { Lock, NoLock } from 'iconoir-react';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
  apolloClient,
  LoginUserDocument,
  LoginUserMutation,
  LoginUserMutationVariables,
} from '@food-delivery-mono/uishared-types';

type LoginFormValues = {
  phoneNumber: string;
  password: string;
};

export function Page() {
  const { register, handleSubmit } = useForm<LoginFormValues>();
  const onSubmit: SubmitHandler<LoginFormValues> = async ({ phoneNumber, password }) => {
    const result = await apolloClient.mutate<LoginUserMutation, LoginUserMutationVariables>({
      mutation: LoginUserDocument,
      fetchPolicy: 'network-only',
      variables: { phoneNumber: phoneNumber, password: password },
    });
  };
  return (
    <Card css={{ width: '30vw', height: '45vh', maxHeight: '400px' }}>
      <Card.Body>
        <form onSubmit={handleSubmit(onSubmit)} className={'w-full'}>
          <Text h2 css={{ textAlign: 'center', color: '$blueDark' }}>
            Welcome back!
          </Text>

          <Col
            css={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyItems: 'center',
              alignItems: 'center',
              margin: '$1 auto',
              '@xlMin': { marginTop: '$14' },
              padding: '0 $12',
            }}
          >
            <Input
              type={'tel'}
              label="Phone Number"
              placeholder="Phone Number"
              color="default"
              fullWidth={true}
              {...register('phoneNumber', { required: true })}
            />

            <Input.Password
              label="Password"
              fullWidth={true}
              placeholder="Password"
              visibleIcon={<NoLock fill="currentColor" fontSize={15} />}
              hiddenIcon={<Lock fill="currentColor" fontSize={15} />}
              css={{ marginTop: '$10' }}
              onInvalid={(error) => console.log(error)}
              {...register('password', { required: true, minLength: 6 })}
            />

            <Button type={'submit'} color={'secondary'} shadow css={{ marginTop: '$10' }}>
              Login
            </Button>
          </Col>
        </form>
      </Card.Body>
    </Card>
  );
}

export default Page;

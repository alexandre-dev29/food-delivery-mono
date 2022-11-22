import { Button, Card, Col, Input, Text } from '@nextui-org/react';
import { Lock, NoLock } from 'iconoir-react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { LoginUserDocument, LoginUserMutation, LoginUserMutationVariables } from '@food-delivery-mono/uishared-types';
import { ReactElement } from 'react';
import { AuthLayout } from '@food-delivery-mono/ui-shared-components';
import { useMutation } from '@apollo/client';

type LoginFormValues = {
  phoneNumber: string;
  password: string;
};

export function LoginPage() {
  // console.log(context);
  const { register, handleSubmit, reset } = useForm<LoginFormValues>();
  const [loginUserMutation] = useMutation<LoginUserMutation, LoginUserMutationVariables>(LoginUserDocument, {
    errorPolicy: 'all',
    fetchPolicy: 'network-only',
  });
  const onSubmit: SubmitHandler<LoginFormValues> = async ({ phoneNumber, password }) => {
    const { data, errors } = await loginUserMutation({ variables: { phoneNumber: phoneNumber, password: password } });
    if (!errors) {
      reset({ phoneNumber: '', password: '' });
    }
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

LoginPage.getLayout = (page: ReactElement) => {
  return <AuthLayout>{page}</AuthLayout>;
};

export default LoginPage;

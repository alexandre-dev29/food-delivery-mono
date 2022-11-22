import { Button, Card, Col, Input, Loading, Text } from '@nextui-org/react';
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
  const [loginUserMutation, { loading }] = useMutation<LoginUserMutation, LoginUserMutationVariables>(
    LoginUserDocument,
    {
      errorPolicy: 'all',
      fetchPolicy: 'network-only',
    }
  );
  const onSubmit: SubmitHandler<LoginFormValues> = async ({ phoneNumber, password }) => {
    const { data, errors } = await loginUserMutation({ variables: { phoneNumber: phoneNumber, password: password } });
    if (!errors) {
      reset({ phoneNumber: '', password: '' });
    }
  };
  return (
    <Card
      css={{
        maxHeight: '400px',
        '@smMax': { width: '90vw', height: '55vh' },
        '@smMin': { width: '50vw', height: '55vh' },
        '@lgMin': { width: '35vw', height: '55vh' },
        '@xlMin': { width: '30vw', height: '55vh' },
      }}
    >
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

            <Button disabled={loading} type={'submit'} color={'secondary'} shadow css={{ marginTop: '$10' }}>
              {loading ? <Loading color="currentColor" size="sm" /> : 'Login'}
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

import { apolloClient, GetAllUsersDocument, GetAllUsersQuery } from '@food-delivery-mono/uishared-types';
import OtherCompo from './otherCompo';

export default async function Home() {
  const { data } = await apolloClient.query<GetAllUsersQuery>({ query: GetAllUsersDocument });
  return (
    <div>
      <input type={''} />
      <OtherCompo name={'Mwenze Nkwembe'} />
    </div>
  );
}

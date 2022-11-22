import { render } from '@testing-library/react';

import AuthorizedLayout from './authorized-layout';

describe('AuthorizedLayout', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AuthorizedLayout />);
    expect(baseElement).toBeTruthy();
  });
});

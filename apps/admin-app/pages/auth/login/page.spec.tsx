import { render } from '@testing-library/react';

import LoginPage from './index';

describe('Index', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LoginPage />);
    expect(baseElement).toBeTruthy();
  });
});

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/svelte';

import FancyPassword from '../FancyPassword.svelte';

const fancyPassword = 'fancy-password';

describe('FancyPassword', () => {
  const renderFancyPassword = ({
    secret = 'a'.repeat(15),
    label = 'Password',
    greenThreshold = 15,
    max = 30,
    poorMessage = '💩',
    goodMessage = '✅',
  }) =>
    render(FancyPassword, {
      props: { secret, label, greenThreshold, max, poorMessage, goodMessage },
    });

  it('should show poor message when secret length is below greenThreshold', () => {
    renderFancyPassword({ secret: 'a'.repeat(10), greenThreshold: 15 });

    expect(screen.getByText('💩')).toBeInTheDocument();
  });

  it('should show good message when secret length is beyond greenThreshold', () => {
    renderFancyPassword({ secret: 'a'.repeat(20), greenThreshold: 10 });

    expect(screen.getByText('✅')).toBeInTheDocument();
  });

  it('should show no message when no secret has yet been typed', () => {
    renderFancyPassword({ secret: '' });

    const message = screen.queryByText('💩');
    expect(message).not.toBeInTheDocument();
  });

  it('should show a label when the label prop conatins "Dingus"', () => {
    renderFancyPassword({ label: 'Dingus' });

    expect(screen.getByText('Dingus')).toBeInTheDocument();
  });

  it('should not include a label when the label prop is empty', () => {
    renderFancyPassword({ label: '' });

    const label = screen.queryByRole('label');
    expect(label).not.toBeInTheDocument();
  });
});

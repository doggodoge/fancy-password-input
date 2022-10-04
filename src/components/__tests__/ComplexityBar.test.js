import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/svelte';

import ComplexityBar from '../ComplexityBar.svelte';

const complexityBar = 'complexity-bar';

describe('ComplexityBar', () => {
  const renderComplexityBar = (
    secret = 'password',
    greenThreshold = 15,
    max = 30,
    thiccness = 5
  ) =>
    render(ComplexityBar, {
      props: {
        secret,
        greenThreshold,
        max,
        thiccness,
      },
    });

  it('should render bar at 25% when input length is 25 with max of 100', () => {
    renderComplexityBar('a'.repeat(25), 25, 100);

    expect(screen.getByTestId(complexityBar)).toMatchInlineSnapshot(`
      <div
        class="container svelte-1rs2pfq"
        data-testid="complexity-bar"
        style="height: 5px; width: 25%;"
      />
    `);
  });

  it('should render bar at 50% when input length is 15 with max of 30', () => {
    renderComplexityBar('a'.repeat(15), 15, 30);

    expect(screen.getByTestId(complexityBar)).toMatchInlineSnapshot(`
      <div
        class="container svelte-1rs2pfq"
        data-testid="complexity-bar"
        style="height: 5px; width: 50%;"
      />
    `);
  });

  it('should have a width of 100% when input length exceeds the max', () => {
    renderComplexityBar('a'.repeat(20), 5, 10);

    expect(screen.getByTestId(complexityBar)).toMatchInlineSnapshot(`
      <div
        class="container svelte-1rs2pfq"
        data-testid="complexity-bar"
        style="height: 5px; width: 100%;"
      />
    `);
  });
});

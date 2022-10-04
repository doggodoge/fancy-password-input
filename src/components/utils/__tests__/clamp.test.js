import clamp from '../clamp';

describe.each`
  input   | lower | upper  | expected
  ${15}   | ${10} | ${20}  | ${15}
  ${15}   | ${20} | ${30}  | ${20}
  ${5}    | ${1}  | ${3}   | ${3}
  ${82}   | ${1}  | ${100} | ${82}
  ${1000} | ${1}  | ${200} | ${200}
  ${15}   | ${15} | ${20}  | ${15}
  ${15}   | ${15} | ${15}  | ${15}
`('clamp($input, $lower, $upper)', ({ input, lower, upper, expected }) => {
  test(`get ${expected} from input ${input}, lower bound ${lower}, and upper bound ${upper}`, () => {
    expect(clamp(input, lower, upper)).toBe(expected);
  });
});

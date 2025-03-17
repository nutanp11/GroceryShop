import { fireEvent, render } from '@testing-library/react-native';
import SignIn from '../../../src/screens/auth/SignIn';
import {
  CREATE_ACCOUNT,
  ENTER_EMAIL,
  LOG_IN,
  PASSWORD,
} from '../../../src/constants/Strings';
import { Alert } from 'react-native';

jest.spyOn(Alert, 'alert').mockImplementation(() => {}); // Mocking Alert

describe('LoginScreen', () => {
  test('Snapshot', () => {
    const { toJSON } = render(<SignIn navigation={{ navigate: jest.fn() }} />);
    expect(toJSON()).toMatchSnapshot();
  });

  it('should render correctly', () => {
    const { getByPlaceholderText } = render(
      <SignIn navigation={{ navigate: jest.fn() }} />
    );
    expect(getByPlaceholderText(ENTER_EMAIL)).toBeTruthy();
    expect(getByPlaceholderText(PASSWORD)).toBeTruthy();
  });

  it('should handle input changes correctly', () => {
    const { getByPlaceholderText } = render(
      <SignIn navigation={{ navigate: jest.fn() }} />
    );
    const emailInput = getByPlaceholderText(ENTER_EMAIL);
    const passwordInput = getByPlaceholderText(PASSWORD);

    fireEvent.changeText(emailInput, 'test@example.com');
    fireEvent.changeText(passwordInput, 'password123');

    expect(emailInput.props.value).toBe('test@example.com');
    expect(passwordInput.props.value).toBe('password123');
  });

  it('should navigate to RegisterScreen on sign up link press', () => {
    const mockNavigate = jest.fn();
    const { getByText } = render(
      <SignIn navigation={{ navigate: mockNavigate }} />
    );

    fireEvent.press(getByText(CREATE_ACCOUNT));
    expect(mockNavigate).toHaveBeenCalledWith('SignUp');
  });

  // Test Case 1: Valid form (email and password provided)
  it('should show success alert and navigate to ScreenA when form is valid', () => {
    const mockNavigate = jest.fn();
    const { getByPlaceholderText, getByText } = render(
      <SignIn navigation={{ navigate: mockNavigate }} />
    );

    fireEvent.changeText(getByPlaceholderText(ENTER_EMAIL), 'test@example.com');
    fireEvent.changeText(getByPlaceholderText(PASSWORD), 'password123');

    fireEvent.press(getByText(LOG_IN));

    // Expect success alert and navigation to ScreenA
    expect(Alert.alert).toHaveBeenCalledWith(
      'Form Submitted',
      'Your email and password are valid.'
    );
    expect(mockNavigate).toHaveBeenCalledWith('ScreenA');
  });

  // Test Case 2: Email is empty
  it('should show validation failed when email is empty', () => {
    const mockNavigate = jest.fn();
    const { getByPlaceholderText, getByText } = render(
      <SignIn navigation={{ navigate: mockNavigate }} />
    );

    fireEvent.changeText(getByPlaceholderText(ENTER_EMAIL), '');
    fireEvent.changeText(getByPlaceholderText(PASSWORD), 'password123');

    fireEvent.press(getByText(LOG_IN));

    expect(Alert.alert).toHaveBeenCalledWith(
      'Validation Failed',
      'Please fill in all fields correctly.'
    );
    expect(mockNavigate).not.toHaveBeenCalled();
  });

  // Test Case 3: Password is empty
  it('should show validation failed when password is empty', () => {
    const mockNavigate = jest.fn();
    const { getByPlaceholderText, getByText } = render(
      <SignIn navigation={{ navigate: mockNavigate }} />
    );

    fireEvent.changeText(getByPlaceholderText(ENTER_EMAIL), 'test@example.com');
    fireEvent.changeText(getByPlaceholderText(PASSWORD), '');

    fireEvent.press(getByText(LOG_IN));

    expect(Alert.alert).toHaveBeenCalledWith(
      'Validation Failed',
      'Please fill in all fields correctly.'
    );
    expect(mockNavigate).not.toHaveBeenCalled();
  });

  // Test Case 4: Both email and password are empty
  it('should show validation failed when both email and password are empty', () => {
    const mockNavigate = jest.fn();
    const { getByPlaceholderText, getByText } = render(
      <SignIn navigation={{ navigate: mockNavigate }} />
    );

    fireEvent.changeText(getByPlaceholderText(ENTER_EMAIL), '');
    fireEvent.changeText(getByPlaceholderText(PASSWORD), '');

    fireEvent.press(getByText(LOG_IN));

    expect(Alert.alert).toHaveBeenCalledWith(
      'Validation Failed',
      'Please fill in all fields correctly.'
    );
    expect(mockNavigate).not.toHaveBeenCalled();
  });

  // Test Case 5: Email has spaces, password is valid
  it('should show validation failed when email is just spaces', () => {
    const mockNavigate = jest.fn();
    const { getByPlaceholderText, getByText } = render(
      <SignIn navigation={{ navigate: mockNavigate }} />
    );

    fireEvent.changeText(getByPlaceholderText(ENTER_EMAIL), '   '); // spaces as input
    fireEvent.changeText(getByPlaceholderText(PASSWORD), 'password123');

    fireEvent.press(getByText(LOG_IN));

    expect(Alert.alert).toHaveBeenCalledWith(
      'Validation Failed',
      'Please fill in all fields correctly.'
    );
    expect(mockNavigate).not.toHaveBeenCalled();
  });

  // Test Case 6: Both email and password are correctly filled
  it('should navigate to ScreenA on Login when email and password are valid', () => {
    const mockNavigate = jest.fn();
    const { getByPlaceholderText, getByText } = render(
      <SignIn navigation={{ navigate: mockNavigate }} />
    );

    fireEvent.changeText(getByPlaceholderText(ENTER_EMAIL), 'test@example.com');
    fireEvent.changeText(getByPlaceholderText(PASSWORD), 'password123');

    fireEvent.press(getByText(LOG_IN));

    expect(Alert.alert).toHaveBeenCalledWith(
      'Form Submitted',
      'Your email and password are valid.'
    );
    expect(mockNavigate).toHaveBeenCalledWith('ScreenA');
  });
});

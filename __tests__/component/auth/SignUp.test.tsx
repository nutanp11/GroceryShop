import { fireEvent, render } from '@testing-library/react-native';
import {
    CREATE_ACC_BTN,
  CREATE_ACCOUNT,
  ENTER_EMAIL,
  FULL_NAME,
  LOG_IN,
  PASSWORD,
} from '../../../src/constants/Strings';
import { Alert } from 'react-native';
import SignUp from '../../../src/screens/auth/SignUp';

describe('SignUp Screen',()=> {
    it('should match snapshot', () => {
        const { toJSON } = render(<SignUp navigation={{ navigate: jest.fn() }} />);
        expect(toJSON()).toMatchSnapshot();
      });


      it('should render correctly', () => {
        const { getByPlaceholderText, getByText } = render(
          <SignUp navigation={{ navigate: jest.fn() }} />
        );
      
        expect(getByPlaceholderText(FULL_NAME)).toBeTruthy();
        expect(getByPlaceholderText(ENTER_EMAIL)).toBeTruthy();
        expect(getByPlaceholderText(PASSWORD)).toBeTruthy();
        expect(getByPlaceholderText('000-00-0000')).toBeTruthy();
        expect(getByText(CREATE_ACC_BTN)).toBeTruthy();
      });


      it('should handle input changes correctly', () => {
        const { getByPlaceholderText } = render(
          <SignUp navigation={{ navigate: jest.fn() }} />
        );
      
        const nameInput = getByPlaceholderText(FULL_NAME);
        const emailInput = getByPlaceholderText(ENTER_EMAIL);
        const passwordInput = getByPlaceholderText(PASSWORD);
        const phoneInput = getByPlaceholderText('000-00-0000');
      
        fireEvent.changeText(nameInput, 'John Doe');
        fireEvent.changeText(emailInput, 'john.doe@example.com');
        fireEvent.changeText(passwordInput, 'password123');
        fireEvent.changeText(phoneInput, '123-456-7890');
      
        expect(nameInput.props.value).toBe('John Doe');
        expect(emailInput.props.value).toBe('john.doe@example.com');
        expect(passwordInput.props.value).toBe('password123');
        expect(phoneInput.props.value).toBe('123-456-7890');
      });

})
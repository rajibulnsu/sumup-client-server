// Enzyme Configuration
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';

//  React Testing Library Configuration
import '@testing-library/react/cleanup-after-each';
import 'jest-dom/extend-expect';

configure({ adapter: new Adapter() });

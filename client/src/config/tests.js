import { configure } from 'enzyme'
import 'jest-styled-components'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

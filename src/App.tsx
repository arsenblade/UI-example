
import {useState} from 'react'
import Select from "./ui-components/Select/Select";
import './styles/global.scss'
import { IOption } from "./ui-components/Select/Select.interface";
import CheckBox from './ui-components/CheckBox/CheckBox';

const options: IOption[] = [
  {
    label: 'React',
    value: '1'
  },
  {
    label: 'Vue',
    value: '2'
  },
  {
    label: 'Angular',
    value: '3'
  },
  {
    label: 'Next',
    value: '4'
  },
  {
    label: 'Nest',
    value: '5'
  },
]

function App() {
  const [value, setValue] = useState<IOption>()


  return (
    <div className="app">
      <div className="container-select">
        <Select customClassName='sel' options={options} onChange={setValue} value={value} placeholder='Фреймворки' isOpen={true}/>
      </div>
      <CheckBox id='1'/>
    </div>
  );
}

export default App;

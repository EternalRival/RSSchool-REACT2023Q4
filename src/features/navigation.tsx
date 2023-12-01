import { Endpoint } from '@shared/enums/endpoint.enum'
import { FC } from 'react'
import { Link } from 'react-router-dom'

export const Navigation: FC = () => (
  <nav>
    <Link to={Endpoint.UNCONTROLLED_COMPONENTS}>First Form</Link>
    <Link to={Endpoint.REACT_HOOK_FORM}>Second Form</Link>
  </nav>
)

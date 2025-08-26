import Dashboard from '../components/Dashboard'
import { useUser } from '../hooks/useUser'

const Home = () => {
  useUser();
  
  return (
    <div>
      <Dashboard/>
    </div>
  )
}

export default Home
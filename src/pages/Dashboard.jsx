import Container from '../components/Container'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Legend, Bar } from 'recharts';
import useChart from '../../hooks/useChart';

const Dashboard = () => {
  const data = useChart()

  return (
    <Container className='py-10'>
      <div className='grid grid-cols-1 gap-20 md:gap-10 md:grid-cols-2'>
        <div className='w-full h-96'>
          <h1 className='mb-5 text-3xl font-semibold text-center'>Monthly Sales</h1>
          <ResponsiveContainer width='100%' height='100%'>
            <AreaChart
              width={500}
              height={400}
              data={data}
              margin={{
                top: 5,
                right: 5,
                left: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis dataKey='sell'/>
              <Tooltip />
              <Area type="monotone" dataKey="sell" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className='w-full h-96'>
          <h1 className='mb-5 text-3xl font-semibold text-center'>Inventment and Revenue</h1>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 5,
                left: 10
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="investment" fill="#8884d8" />
              <Bar dataKey="revenue" fill="#44FFD2" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      
    </Container>
  )
}

export default Dashboard
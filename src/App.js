import {useState} from 'react'
import useFetchjobs from './useFetchjobs';
import {Container} from 'react-bootstrap';
import Job from './Job.js'
import JobsPagination from './JobsPagination.js'
import SearchFrom from './SearchForm';
function App() {
  const [params, setParams] = useState({})
  const [page, setPage] = useState(1)
  const {jobs, loading, error, hasNextPage} = useFetchjobs(params, page)

  function handleParamChange(e){
    const param = e.target.name
    const value = e.target.value
    setPage(1)
    setParams(prevParams => {
      return {...prevParams, [param]: value}
    })
  }

  return (
    <Container className="App my-4">
      <h1 className="mb-4">Github Jobs</h1>
      <SearchFrom params={params} onParamChange={handleParamChange} />
      <JobsPagination page={page} setPage={setPage} hasNextPage={true} />
     {loading && <h1>Loading....</h1>}
     {error && <h1>Error try refreshing page....</h1>}
     {jobs.map(job => {
       return <Job key={job.id} job={job} />
     })}
      <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />

    </Container>
  );
}

export default App;

import Spinner from "../components/Spinner"
import { useQuery } from "@apollo/client"
import { GET_PROJECTS } from "../queries/ProjectQueries"
import ProjectCard from "./ProjectCard"

const Projects = () => {

    const {loading,error,data} = useQuery(GET_PROJECTS)

    if(loading) return <Spinner/>;
    if(error) return <p>Something went wrong...</p>;

    console.log(error)

  return (
    <>
    {data.projects.length > 0 ? (
        <div className="row mt-4">
            {data.projects.map((project)=>(
                <ProjectCard key={project.id} project={project} />
            ))}
        </div>
    ) : (<p>No projects</p>) }
    </>
  )
}

export default Projects
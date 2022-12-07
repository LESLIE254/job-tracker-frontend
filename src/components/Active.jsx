import { useEffect } from "react"
import { useState } from "react"

export default function Active(){
    const [job,setJob] = useState({})
    function moreDetails(job){
        setJob(job.job)
        // console.log("details",job)
        // setJob({
        //     id: 1,
        //     title: "myJob",
        //     description: "yow",
        //     deadline: "check me out",
        //     qualifications:"haha",
        //     company_name: "yow",
        // })
    }
    const [applied,setApplied] = useState([])
    useEffect(()=>{
        fetch("/applications")
        .then(resp=>resp.json())
        .then(data=>setApplied(data))
    },[])
    function handleChange(e){
        // setInterviewStage(e.target.stage.value)
    }
    function handleSubmit(e){
        // console.log(e.target.stage?.value)
    }
    return (
        <>
        <div className="jobsBoard">
            <div id="onlyJobs">
            <h2>My Job applications</h2>
        {applied?.map((job,index)=>{
            return(
            <div key={index} className="job" onClick={()=>moreDetails(job)}>
                <div className="jobTitle">{job.job.job_title}</div>
                <div className="updateJob">
                <div className="jobCompany">{job.job.company_name}</div>
                <button className="update">Update</button>
                </div>
                
            </div>
            )

                })}
            </div>
         <form id="jobDetails" className={applied?"show":"hide"} onSubmit={handleSubmit}>
                {console.log("applied",job)}
                <h4>Job Title</h4>
                <h3>{job?.job_title}</h3>
                <div className="jobDesc">
                    <h4>Description</h4>
                    <input name="description" type="text" value={job?.description} disabled/>
                </div>
                <div className="jobDesc">
                    <h4>Company Name</h4>
                    <input name="company_name" disabled value={job?.company_name} />
                </div>
                <div className="jobDesc">
                    <h4>Qualifications</h4>
                    <input name="qualifications" disabled value={job?.qualifications} />
                </div>
                <div className="jobDesc">
                    <h4>Deadline</h4>
                    <input name="deadline" disabled value={job.deadline} />
                </div>
                <div className="jobDesc">
                    <h4>Deadline</h4>
                    <input name="deadline" disabled value={applied.deadline} />
                </div>
              
                <button>
                    Update Application
                </button>

            </form>
            </div>
        </>
    )
}
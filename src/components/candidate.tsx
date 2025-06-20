import type { CandidateType } from "@/types/candidateType";



const Candidate = (props: CandidateType) => {
    const { name, age, experience, skills, working, status } = props;
    return (
        <div>
            <h2>Candidate</h2>
            <p>Name: {name.toUpperCase()}</p>
            <p>Age: {age}</p>
            <p>Experience: {experience} years</p>
            <p>Status: {status}</p>
            <p>Skills: {skills.join(', ')}</p>
            <p>Working: {working ? "Yes" : "No"}</p>
        </div>
    );
};

export default Candidate;

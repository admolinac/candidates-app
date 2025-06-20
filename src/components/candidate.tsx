import type { CandidateType } from "@/types/candidateType";

type CandidateProps= CandidateType & {
    children: React.ReactNode
};

const Candidate = (props: CandidateProps) => {
    const { name, age, experience, skills, working, status, children, city, imageName } = props;
    return (
        <div>
            <h2>Candidate</h2>
            <p>Name: {name.toUpperCase()}</p>
            <p>Age: {age}</p>
            <p>City: {city}</p>
            <p>Experience: {experience} years</p>
            <p>Status: {status}</p>
            <p>Skills: {skills.join(', ')}</p>
            <p>Working: {working ? "Yes" : "No"}</p>
            {children}
            <div>
                <img src={`/avatars/${imageName}`} className="App-logo" alt="avatar" />
            </div>
        </div>
    );
};

export default Candidate;

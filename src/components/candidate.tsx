import type { CandidateType } from "@/types/candidateType";

type CandidateProps = CandidateType & {
    children: React.ReactNode
};

const Candidate = (props: CandidateProps) => {
    const { name, age, experience, skills, working, status, children, imageName } = props;
    return (
        <div className="candidate-container">
            <h2 className="candidate-title">Candidate ⚡</h2>
            <p className="candidate-info"><strong>Name:</strong> {name}</p>
            <p className="candidate-info"><strong>Age:</strong> {age}</p>
            <p className="candidate-info"><strong>Experience:</strong> {experience} years</p>
            <p className="candidate-info"><strong>Status:</strong> {status}</p>
            <p className="candidate-info"><strong>Skills:</strong> {skills.join(', ')}</p>
            <p className="candidate-status">
                {working ? 'Currently working' : 'Not currently working'}
            </p>
            <div className="candidate-avatar">
                <img src={`/avatars/${imageName}`} alt="avatar" />
            </div>
            {children}
        </div>
    );
};

export default Candidate;

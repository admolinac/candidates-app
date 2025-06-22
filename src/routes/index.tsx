import { createFileRoute } from '@tanstack/react-router'
import '../styles/Candidate.css'
import Candidate from '@/components/candidate'
import type { CandidateType } from '@/types/candidateType'

export const Route = createFileRoute('/')({
    component: App,
})

function App() {

    const candidates: CandidateType[] = [
        {
            name: 'John Doe',
            age: 30,
            experience: 5,
            skills: ['JavaScript', 'React', 'Node.js'],
            working: true,
            status: 'Interviewing',
            imageName: 'john.svg'
        },
        {
            name: 'Jane Smith',
            age: 28,
            experience: 3,
            skills: ['Python', 'Django'],
            working: false,
            status: 'Pending',
            imageName: 'jane.svg'
        },
        {
            name: 'Alice Johnson',
            age: 35,
            experience: 10,
            skills: ['Java', 'Spring Boot'],
            working: true,
            status: 'Hired',
            imageName: 'alice.svg'
        }
    ];

    return (
        <div className="App">
            {
                candidates.length === 0 ? (
                    <p>No candidates available</p>
                ) : (
                    candidates.map((candidate, index) => (
                        <Candidate
                            key={index}
                            name={candidate.name}
                            age={candidate.age}
                            experience={candidate.experience}
                            skills={candidate.skills}
                            working={candidate.working}
                            status={candidate.status}
                            imageName={candidate.imageName}>
                            <button className="candidate-button">View Profile</button>
                        </Candidate>
                    )
                    )
                )
            }
        </div>
    )
}

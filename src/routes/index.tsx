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
            city: 'New York',
            age: 30,
            experience: 5,
            skills: ['JavaScript', 'React', 'Node.js'],
            working: true,
            status: 'Interviewing',
            imageName: 'john.svg'
        },
        {
            name: 'Jane Smith',
            city: 'Los Angeles',
            age: 28,
            experience: 3,
            skills: ['Python', 'Django'],
            working: false,
            status: 'Pending',
            imageName: 'jane.svg'
        },
        {
            name: 'Alice Johnson',
            city: 'Chicago',
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
                candidates.map((candidate, index) => (
                        <Candidate
                            key={index}
                            name={candidate.name}
                            city={candidate.city}
                            age={candidate.age}
                            experience={candidate.experience}
                            skills={candidate.skills}
                            working={candidate.working}
                            status={candidate.status}
                            imageName={candidate.imageName}>
                            {/* Children */}
                            <button className="candidate-button">View Profile</button>
                        </Candidate>
                    )
                )
            }
        </div>
    )
}

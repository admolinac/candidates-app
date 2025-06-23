import type { CandidateType } from "@/types/candidateType";
import { cn } from "@/utils/style";

type CandidateProps = CandidateType & {
    className?: string,
};

const Candidate = (props: CandidateProps) => {
    const { name, age, experience, skills, working, status, imageName } = props;
    return (
        <div className={cn(
            props.className,
            "border border-gray-300 rounded-lg p-4 gap-2 flex flex-col",
            "shadow-md hover:shadow-lg transition-shadow duration-300",
            "min-w-[250px]"
        )}>
            <div className="flex items-center justifybetween mb-2 gap-x-8">
                <h2 className="text-xl font-bold"> {name} </h2>
                <span className={cn(
                    "text-sm font-medium text-white px-4",
                    "py-1 rounded-full",
                    getStatusColor(status),
                )}>
                    {status.toUpperCase()}
                </span>
            </div>
            <p className="text-gray-500">Age: {age}</p>
            <p className="text-gray-500">Experience: {experience} years</p>
            <p className={
                cn("text-gray-500",
                    working ? "text-green-600" : "text-red-600"
                )
            }>
                {working ? 'Currently working' : 'Not currently working'}
            </p>
            <h3 className="text-lg font-semibold text-gray-800 mt-2">Skills:</h3>
            <ol className="list-decimal list-inside text-gray-700">{skills.map((skill, index) =>
            (
                <li className="block ml-1" key={index}>
                    {skill}
                </li>
            )
            )}
            </ol>

            <div className="mt-4 flex justify-center">
                <img className="max-w-32" src={`/avatars/${imageName}`} alt="avatar" />
            </div>
            <button className={cn(
                "mt-4 w-full rounded-2xl p-2",
                "bg-sky-600 text-white font-medium",
                "hover:bg-sky-800 transition-colors duration-300",
            )}
                onClick={copyData}>
                Copy data
            </button>
        </div>
    );

    function copyData() {
        const textToCopy = `Name: ${name}, Status: ${status}, Age: ${age}, Working: ${working ? 'Yes' : 'No'}, Experience: ${experience} years, Skills: ${skills.join(', ')}`;
        navigator.clipboard
            .writeText(textToCopy)
            .then(() => {
                alert('Data copied to clipboard! ✅');
            })
            .catch((error) => {
                console.error('Error copying data: ', error);
                alert('Failed to copy data ❌');
            });
    }

    function getStatusColor(status: CandidateType['status']) {
        if (status === 'Hired') {
            return 'bg-green-600 hover:bg-green-700';
        }
        if (status === 'Interviewing') {
            return 'bg-yellow-600 hover:bg-yellow-700';
        }
        if (status === 'Pending') {
            return 'bg-blue-600 hover:bg-blue-700';
        }
        if (status === 'Refused') {
            return 'bg-red-600 hover:bg-red-700';
        }
        return 'bg-gray-600 hover:bg-gray-700';
    }
};


export default Candidate;

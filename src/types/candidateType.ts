import { z } from 'zod';

const candidateSchema = z.object({
    name: z.string().min(3, "El nombre debe tener al menos 3 caracteres").max(100, "El nombre no puede exceder los 100 caracteres"),
    age: z.number().positive().int(),
    experience: z.number().gte(0),
    status: z.enum(['Pending', 'Reviewing', 'Interviewing', 'Hired', 'Refused']),
    skills: z.array(z.string()),
    working: z.boolean(),
    imageName: z.string()
});

export type CandidateType = z.infer<typeof candidateSchema>;
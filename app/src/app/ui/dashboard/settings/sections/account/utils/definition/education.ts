
export interface EducationDetails {
    type: string;
    title: string;
    startDate: string;
    endDate: string;
    status: string;
    comments: string;
}

export interface Education {
    id: number;
    details: EducationDetails;
}
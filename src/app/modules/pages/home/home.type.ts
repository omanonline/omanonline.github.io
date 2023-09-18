export interface BusinessCategory
{
    id: string;
    slug: string;
    title: string;
    business?: Business[];
}

export interface Business
{
    id: string;
    categoryId: string;
    question: string;
    answer: string;
}


export interface ServicesCategory
{
    id: string;
    slug: string;
    title: string;
    business?: Services[];
}

export interface Services
{
    id: string;
    categoryId: string;
    question: string;
    answer: string;
}


export interface JobsCategory
{
    id: string;
    slug: string;
    title: string;
    business?: Jobs[];
}

export interface Jobs
{
    id: string;
    categoryId: string;
    question: string;
    answer: string;
}

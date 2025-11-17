export interface SkillGridProps {
    items: Array<{ alt: string; img: any; description: string; link: string }>
}

export interface ProcessStepItem {
    name: string;
    answer: string;
    icon: React.ReactNode;
}

export interface HeadingProps {
    children: React.ReactNode;
}


export enum SelectedPage {
    Home = "home",
    Benefits= "benefits",
    OurClasses= "ourclasses",
    ContactUs = "contactus"
}

export interface BenefitsType {
    icon: React.ElementType
    title: string
    description: string
}
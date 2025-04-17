

// icon

import  FitnessCenterIcon from "@mui/icons-material/FitnessCenter"
import  SelfImprovementIcon  from "@mui/icons-material/SelfImprovement"
import  PsychologyIcon  from "@mui/icons-material/Psychology"

//type
import { BenefitsType } from "../shared/types"


export const benefits: BenefitsType[]  = [
    {
        title: "Gym Facilities", 
        icon: FitnessCenterIcon ,
        description: "Unbelieveable designs and infastructure.. a peaceful place for lesuire"
    },
    {
        title: "Yoga activities and Love pool", 
        icon: SelfImprovementIcon ,
        description: "who doesn't believe in love especially when you are with a group of single people"
    },
    {
        title: "Therapy Sessions", 
        icon: PsychologyIcon ,
        description: "Work can be tiring ...if you need to vent or someone professionally to talk to or a listener"
    },

]

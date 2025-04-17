

// imgs
import RopesImg from "../imgs/ropes.jpg"
import LiftImg from "../imgs/lift.jpg"
import OnGround from "../imgs/on-ground.jpg"
import ManWithBell from "../imgs/manwithbell.jpg"
import DeadLift from "../imgs/deadlift.jpg"

import { ClassType } from "../shared/types"


export const classes: ClassType[] = [
    {
        title: "Therapy Classes", 
        description: "fine dancing to ease the pain of work or heartbreak ",
        image: DeadLift
    },
    {
        title: "Gym Classes", 
        description: "Bulking up more than muscles but your mind also",
        image: LiftImg
    },
    {
        title: "Singlee ", 
        description: "Finding love maybe hard but easier if you can meet people like you",
        image: ManWithBell
    },
    {
        title: "Yoga ", 
        description: "Finding some peace and quiet while doing small exercise",
        image: OnGround
    },
    {
        title: "Sport", 
        description: "Compete to the highest breaking records and setting them to be in the wall of fame",
        image: RopesImg
    },
]
import { SiTypescript, SiTailwindcss, SiMongodb, SiJavascript, } from "react-icons/si";
import { SiFastapi } from "react-icons/si";
import { SiGooglegemini } from "react-icons/si";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaPython, FaGitAlt } from "react-icons/fa";
import { SiSocketdotio } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { SiGodotengine } from "react-icons/si";




export const navlinks = {
    tag_ab: {
        text: "About",
        id: "#about"
    },

    tag_ex: {
        text: "Experience",
        id: "#expereince"
    },
    tag_pr:{
        text: "Project",
        id: "#project"
    }

}


export const experiences = {
    techranger: {
        title: "Software Engineering Intern",
        company: "Center of Distributed Learning at UCF",
        date: "March 2025 - Present",
        res: 
        [
            "Developing a full-stack accessibility tool for faculty to ensure accessible online courses.",
            "Implementing various accessibility solutions to keep online courses up to WCAG standards"
        ],
        tech: "Javascript, React, NodeJS, PHP, Symfony, SQL",
        colorCode: "#deb53c"
    }
}

export const projects = [
    {
        name: "Crimson Brawl",
        github:"https://github.com/lucasmcclean/project-foxtrot-black-trigger-watchtower-omega",
        image: "/images/crimsonbrawl.gif",
        description: "A fighting game that won 'Best Game Hack' at Knight Hacks VIII where one of the characters is controlled by an EEG.",
        tech:[
            { name:"Godot", icon: SiGodotengine },
            {name: "Python", icon: FaPython},
        ]
    },


    {
        name: "Wrong Answers (In progress)",
        github:"https://github.com/Ishfaq-code/Wrong-Answers",
        image: "/images/WrongAnswers.png",
        description: "A real time party web game that's in progress",
        tech:[
            { name:"React", icon: FaReact },
            {name: "Typescript", icon: SiTypescript},
            {name: "Firebase", icon: SiSocketdotio},

        ]
    },


    {
        name: "Altimate",
        github: "https://github.com/lucasmcclean/altimate",
        image: "/images/AltimateSS.jpg",
        description: "A chrome-extension that uses Gemini to automatically make a site accessible.",
        tech: 
        [ 
            { name:"React", icon: FaReact },
            {name: "Typescript", icon: SiTypescript},
            {name: "FastAPI", icon: SiFastapi},
            {name: "Gemini", icon: SiGooglegemini}
        
        ]
    },


    {
        name: "In The Moment",
        github: "https://github.com/Ishfaq-code/InTheMoment",
        image: "/images/InTheMoment.jpg",
        description: "An app for sharing memories between your loved ones easily and privately",
        tech: 
        [ 
            { name:"React", icon: FaReact },
            {name: "FastAPI", icon: SiFastapi},
            {name: "Firebase", icon: IoLogoFirebase}
        
        ]
    },


        {
        name: "Recallify",
        github: "https://github.com/Ishfaq-code/Recallify",
        image: "/images/Recallify.jpg",
        description: "Fullstack web app with a RAG Pipeline to help with reinforcement learning",
        tech: 
        [ 
            { name:"React", icon: FaReact },
            {name: "FastAPI", icon: SiFastapi},
            {name: "Gemini", icon: SiGooglegemini}
        
        ]
    }

    
]

export const techStack = [
  { name: "React", icon: FaReact  },
  { name: "Node.js", icon: FaNodeJs  },
  { name: "JavaScript", icon: SiJavascript  },
  { name: "TypeScript", icon: SiTypescript  },
  { name: "HTML5", icon: FaHtml5  },
  { name: "CSS3", icon: FaCss3Alt  },
  { name: "Tailwind", icon: SiTailwindcss  },
  { name: "MongoDB", icon: SiMongodb  },
  { name: "Python", icon: FaPython  },
  { name: "FastAPI", icon: SiFastapi  },
  { name: "Git", icon: FaGitAlt  },
];


// Definiendo la interfaz
interface Logos {
    id: number
    name: string
    alt: string
    img: string
}

const DevLogos = [
    { id: 1, name: "JavaScript", alt: "JavaScript Logo" },
    { id: 2, name: "MySQL", alt: "MySQL Logo" },
    { id: 3, name: "NestJS", alt: "NestJS Logo" },       
    { id: 4, name: "NodeJS", alt: "Node.js Logo" },       
    { id: 5, name: "React", alt: "React Logo" },          
]

export const LogosFullStack: Logos[] = DevLogos.map((tech) => ({
    id: tech.id,
    name: tech.name,
    alt: tech.alt,
    img: new URL(`../assets/Programming/${tech.name}.png`, import.meta.url).href
}))
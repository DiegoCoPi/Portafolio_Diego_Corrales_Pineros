interface Logo{
    id: number;
    name:string;
    alt:string;
    img:string;
}

const ItLogos=[
    {id:1, name:"Windows10", alt:"Windows 10 Logo"},
    {id:2, name:"Windows11", alt: "Windows 11 Logo"},
    {id:3, name:"Linux", alt:"Linux Logo"},
    {id:4, name:"Python", alt:"Python Logo"}
]

export const LogosITSupport:Logo[] = ItLogos.map((tech)=>({
    id:tech.id,
    name:tech.name,
    alt:tech.alt,
    img: new URL(`../../assets/it-support/${tech.name}.png`,import.meta.url).href
}))
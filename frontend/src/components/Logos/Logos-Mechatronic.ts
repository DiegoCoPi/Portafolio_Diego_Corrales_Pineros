interface Logos{
    id: number;
    name:string;
    alt:string;
    img:string;
}

const MechLogos=[
    {id:1, name:"Cadesimu", alt:"Cadesimu Logo"},
    {id:2, name:"CatiaDefault", alt: "Catia Logo"},
    {id:3, name:"Inventor", alt:"Inventor Logo"},
    {id:4, name:"Matlab", alt:"Matlab Logo"},
    {id:5, name:"Proteus", alt:"Proteus Logo"}
]

export const LogosMecatronic:Logos[] = MechLogos.map((tech)=>({
    id:tech.id,
    name:tech.name,
    alt:tech.alt,
    img: new URL(`../../assets/mechatronic-engineer/${tech.name}.png`,import.meta.url).href
}))

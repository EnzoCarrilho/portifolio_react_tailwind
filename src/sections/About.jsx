import { Code2, Lightbulb, Rocket, Users } from "lucide-react"

const highlights = [
    {
        icon: Code2,
        title: 'Clean Code',
        description: 'Foco em um código limpo, legível e de fácil manutenção, seguindo boas práticas de desenvolvimento.'
    },
    {
        icon: Rocket,
        title: 'Aprendizado Contínuo',
        description: 'Busco aprender constantemente novas tecnologias e boas práticas para evoluir como desenvolvedor.'
    },
    {
        icon: Users,
        title: 'Trabalho em Equipe Colaborativo',
        description: 'Valorizo a colaboração, a comunicação e a troca de conhecimentos para desenvolver soluções de forma eficiente e alcançar objetivos em conjunto.'
    },
    {
    icon: Lightbulb,
    title: 'Resolução de Problemas',
    description: 'Busco compreender cada desafio antes de desenvolver soluções, utilizando a programação para atender às necessidades de forma prática e objetiva.'
    }
]

export const About = () => {
    return( 
        <section id="about" className="py-3 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column */}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                                Sobre
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground ">
                            Sempre em desenvolvimento,
                            <span className="font-serif italic font-normal text-white">
                                {" "}
                                construindo soluções.
                            </span>
                        </h2>

                        <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                            <p>
                                Estou iniciando minha caminhada na área de desenvolvimento, como desenvolvedor Full Stack em formação e estudante de Ciência da Computação.
                                Concluí o curso Técnico em Desenvolvimento de Sistemas pelo SENAI, onde desenvolvi experiência prática na criação de aplicações atuando em diferentes camadas do desenvolvimento. 
                            </p>
                            <p>
                                Atualmente curso Ciência da Computação na UNIP e continuo aprofundando meus conhecimentos em desenvolvimento de software.
                            </p>
                            <p>
                                Tenho interesse em desenvolvimento Back-End, Front-End e Mobile, com foco em criar soluções funcionais e evoluir constantemente através de projetos e novos desafios.
                            </p>
                        </div>

                        <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                            <p className="text-lg font-medium italic text-foreground">
                                "Desde o meu primeiro contato com a programação, busco aprimorar
                                continuamente meus conhecimentos e desenvolver minhas habilidades como
                                desenvolvedor de software. Ao longo da minha formação, desenvolvi diversos
                                projetos práticos que fortaleceram minha base técnica e minha capacidade de
                                resolver problemas."
                            </p>
                        </div>
                    </div>

                    {/* Right Column - Highlights */}
                    <div className="grid sm:grid-cols-2 gap-6">
                        {highlights.map((item, index) => (
                            <div 
                            key={index} 
                            className="glass p-6 rounded-2xl animate-fade-in"
                            style={{animationDelay: `${(index + 1) * 100}ms`}}
                        >
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                                    <item.icon className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                <p className="text-sm text-muted-foreground">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}   
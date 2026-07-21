import { Code2, Rocket } from "lucide-react"

const highlights = [
    {
        icon: Code2,
        title: 'Clean Code',
        description: 'Foco em um código limpo, legível e de fácil manutenção, seguindo boas práticas de desenvolvimento.'
    },
    {
        icon: Rocket,
        title: 'Clean Code',
        description: 'Foco em um código limpo, legível e de fácil manutenção, seguindo boas práticas de desenvolvimento.'
    },
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
                            Building the future,
                            <span className="font-serif italic font-normal text-white">
                                {" "}
                                one component at a time.
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
                                "Sempre busco a aprender mais e dominar novos conhecimentos"
                            </p>
                        </div>
                    </div>

                    {/* Right Column - Highlights */}
                    <div className="grid sm:grid-cols-2 gap-6">
                        {highlights.map((item, index) => (
                            <div>
                                <div>
                                    <item.icon />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}   
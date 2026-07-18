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
                        <span>Sobre</span>
                    </div>

                    <h2>
                        Building the future,
                        <span>one component at a time.</span>
                    </h2>
                </div>
            </div>
        </section>
    )
}   
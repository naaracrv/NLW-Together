import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
// import from '../assets/images/.svg'

export function Home() {
    return (
        <div>
            <aside>
                <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire as dúvidas da sua audiência em tempo real</p>
            </aside>
            <main>
                <div>
                    <img src={logoImg} alt="NLWTogether" />
                </div>
            </main>

        </div>
    )
}

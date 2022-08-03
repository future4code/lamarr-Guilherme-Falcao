import { ButtonRed, ButtonGreen, Container, Img } from "./style"

export function Cards (props) {
    return (
        <Container>
            <Img src="https://criticalhits.com.br/wp-content/uploads/2021/07/Rubeo-Hagrid-6.jpg" alt="foto do usuário" ></Img>
            <h2>Hagrid</h2>
            <h2>94</h2>
            <p>guarda-caça e Guardião das Chaves e Terrenos de Hogwarts</p>
            <ButtonRed>Hoje não, faro</ButtonRed>
            <ButtonGreen>Hoje sim!</ButtonGreen>
        </Container>
    )
}
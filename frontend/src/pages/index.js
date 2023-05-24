import "bootstrap/dist/css/bootstrap.min.css";
import HomeScreen from "@/screens/HomeScreen";
import { Container } from "react-bootstrap";

export default function Home() {
    return (
        <>
            <main>
                <Container>
                    <HomeScreen />
                </Container>
            </main>
        </>
    );
}

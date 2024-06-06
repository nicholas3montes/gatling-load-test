package simulations;

import io.gatling.javaapi.core.Simulation;
import io.gatling.javaapi.core.CoreDsl.*;
import io.gatling.javaapi.http.HttpDsl.*;
import io.gatling.javaapi.core.ScenarioBuilder;
import io.gatling.javaapi.http.HttpProtocolBuilder;
import static io.gatling.javaapi.core.CoreDsl.scenario;
import static io.gatling.javaapi.core.CoreDsl.rampUsers;
import static io.gatling.javaapi.http.HttpDsl.http;

import java.time.Duration;

public class BasicSimulation extends Simulation {

    // Configuração da URL base da sua aplicação
    private final String baseURL = "http://localhost:3000";

    // Definição do cenário de teste
    private final ScenarioBuilder scn = scenario("Basic Load Test Scenario")
            .exec(http("Request")
            .get("/products")
            .header("Content-Type", "application/json"));

    // Configuração dos parâmetros de execução do teste
    private final HttpProtocolBuilder httpProtocol = http
            .baseUrl(baseURL)
            .acceptHeader("application/json");

    // Configuração da carga simulada
    private final int numberOfUsers = 1000; // Número de usuários simulados
    private final int rampUpTimeInSeconds = 10; // Tempo de ramp-up (em segundos)

    // Configuração e execução do teste de carga
    public BasicSimulation() {
        setUp(
            scn.injectOpen(
                rampUsers(numberOfUsers).during(Duration.ofSeconds(rampUpTimeInSeconds)) // Inicia numberOfUsers usuários durante rampUpTimeInSeconds segundos
            ).protocols(httpProtocol)
        );
    }
}

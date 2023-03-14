package simplefitnesstracking.com.simplefitnesstracking;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication
@EnableMongoRepositories()//If the repository is in a different package. Which it probably should be.
public class SimplefitnesstrackingApplication {

	//MongoDB tutorial declares the repo here. I currently do it in RecipesController
	//@Autowired
	//UserRepository userRepository;

	public static void main(String[] args) {
		SpringApplication.run(SimplefitnesstrackingApplication.class, args);
	}

}

package simplefitnesstracking.com.simplefitnesstracking;

import org.springframework.data.mongodb.repository.MongoRepository;

//id in User.java is type String so that's why we include String below
public interface UserRepository extends MongoRepository<User, String> {
    
    public User findByEmail(String email);
    
}
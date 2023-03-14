package simplefitnesstracking.com.simplefitnesstracking;

import java.util.ArrayList;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("User")
public class User {
    @Id
    private String id;
    private String email;
    private String password;
    //This is then an array of Sub-Documents
    private ArrayList<Recipe> recipes;

    //Used to declare the perfered constructor when there are multiple constructors
    //@PersistenceCreator
    public User(){};

    //There will be two types of users: existing and new
    public User(String email, String password){
        super();
        this.email = email;
        this.password = password;
    }

    public User(String id, String email, String password, ArrayList<Recipe> recipes){
        super();
        this.id = id;
        this.email = email;
        this.password = password;
        this.recipes = recipes;
    }

    @Override
    public String toString(){
        return "User [id=" + id + ", email=" + email + ", recipes=" + recipes.toString() + "]";
    }

    public ArrayList<Recipe> getRecipes() {
        return this.recipes;
    }

    public void setRecipes(ArrayList<Recipe> recipes) {
        this.recipes = recipes;
    }

    public String getId() {
        return this.id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

}

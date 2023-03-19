package simplefitnesstracking.com.simplefitnesstracking;

import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.bson.types.ObjectId;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

@RestController
@CrossOrigin
public class RecipesController {

    @Autowired
    private UserRepository userRepository;

    private String username = "Guest";

    @GetMapping
    public ModelAndView home() {
        ModelAndView mav=new ModelAndView("index");
        return mav;
    }

    //Temporary username setting with no security
    @GetMapping("${set.user}{username}")
    public void setUser(@PathVariable String username){
        this.username = username.substring(0, 1).toUpperCase() + username.substring(1);
        //System.out.println("setUsername ran: " + this.username);
    }

    @GetMapping("${user.get.recipes}")
    @ResponseBody
    public ArrayList<Recipe> getRecipes(){
        return userRepository.findByEmail(username).getRecipes();
    }

    @PostMapping("${user.add.recipe}")
    public void addRecipe(@RequestBody final Recipe recipe){
        recipe.setObjectId(new ObjectId().toString());
        User user = userRepository.findByEmail(username);
        user.getRecipes().add(recipe);
        userRepository.save(user);
    }

    @PutMapping("${user.edit.recipe}{id}")
    public void editRecipe(@RequestBody final Recipe editedRecipe, @PathVariable String id){
        User user = userRepository.findByEmail(username);
        ArrayList<Recipe> recipes = user.getRecipes();
        int index = -1;
        for(Recipe recipe : recipes){
            if(recipe.getId().equals(id)){
                index = recipes.indexOf(recipe);
            }
        }
        user.getRecipes().set(index, editedRecipe);
        userRepository.save(user);
    }

    @DeleteMapping("${user.delete.recipe}{id}")
    public void deleteRecipe(@PathVariable String id){
        User user = userRepository.findByEmail(username);
        ArrayList<Recipe> recipes = user.getRecipes();
        int index = -1;
        for(Recipe recipe : recipes){
            if(recipe.getId().equals(id)){
                index = recipes.indexOf(recipe);
            }
        }
        user.getRecipes().remove(index);
        userRepository.save(user);
    }

    //Apparently this doesn't work as POST.... 
    @PutMapping("${user.add.ingredient}{id}")
    public void addIngredient(@RequestBody final Ingredient ingredient, @PathVariable String id){
        ingredient.setObjectId(new ObjectId().toString());
        User user = userRepository.findByEmail(username);
        ArrayList<Recipe> recipes = user.getRecipes();
        int index = -1;
        for(Recipe recipe : recipes){
            if(recipe.getId().equals(id)){
                index = recipes.indexOf(recipe);
            }
        }
        user.getRecipes().get(index).getIngredients().add(ingredient);
        userRepository.save(user);
    }

    @PutMapping("${user.edit.ingredient}{id}")
    public void editIngredient(@RequestBody final Ingredient editedIngredient, @PathVariable String id){
        
        User user = userRepository.findByEmail(username);
        ArrayList<Recipe> recipes = user.getRecipes();
        int recipeIndex = -1;
        for(Recipe recipe : recipes){
            if(recipe.getId().equals(id)){
                recipeIndex = recipes.indexOf(recipe);
            }
        }
        ArrayList<Ingredient> ingredients = user.getRecipes().get(recipeIndex).getIngredients();
        int ingredientIndex = -1;
        for(Ingredient ingredient : ingredients){
            if(ingredient.getId().equals(editedIngredient.getId())){
                ingredientIndex = ingredients.indexOf(ingredient);
            }
        }
        
        user.getRecipes().get(recipeIndex).getIngredients().set(ingredientIndex, editedIngredient);
        userRepository.save(user);
    }

    @DeleteMapping("${user.delete.ingredient}{recipeID}/{ingredientID}")
    public void deleteIngredient(@PathVariable String recipeID, @PathVariable String ingredientID){
        
        User user = userRepository.findByEmail(username);
        ArrayList<Recipe> recipes = user.getRecipes();
        int recipeIndex = -1;
        for(Recipe recipe : recipes){
            if(recipe.getId().equals(recipeID)){
                recipeIndex = recipes.indexOf(recipe);
            }
        }
        ArrayList<Ingredient> ingredients = user.getRecipes().get(recipeIndex).getIngredients();
        int ingredientIndex = -1;
        for(Ingredient ingredient : ingredients){
            if(ingredient.getId().equals(ingredientID)){
                ingredientIndex = ingredients.indexOf(ingredient);
            }
        }
        
        user.getRecipes().get(recipeIndex).getIngredients().remove(ingredientIndex);
        userRepository.save(user);
    }

}

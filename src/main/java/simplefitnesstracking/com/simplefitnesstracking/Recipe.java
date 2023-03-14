package simplefitnesstracking.com.simplefitnesstracking;

import java.util.ArrayList;

public class Recipe {
    private String id;
    private String name;
    private String displayStyle;
    private int totalNumberOfServings;
    private String description;
    private String notes;
    private String url;
    private ArrayList<Ingredient> ingredients;
    
    public Recipe(){};

    public String getId() {
        return this.id;
    }

    public void setObjectId(String id) {
        this.id = id;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDisplayStyle() {
        return this.displayStyle;
    }

    public void setDisplayStyle(String displayStyle) {
        this.displayStyle = displayStyle;
    }

    public void setId(String id) {
        this.id = id;
    }

    public int getTotalNumberOfServings() {
        return this.totalNumberOfServings;
    }

    public void setTotalNumberOfServings(int totalNumberOfServings) {
        this.totalNumberOfServings = totalNumberOfServings;
    }

    public String getDescription() {
        return this.description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getNotes() {
        return this.notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }

    public String getUrl() {
        return this.url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public ArrayList<Ingredient> getIngredients() {
        return this.ingredients;
    }

    public void setIngredients(ArrayList<Ingredient> ingredients) {
        this.ingredients = ingredients;
    }
    
}

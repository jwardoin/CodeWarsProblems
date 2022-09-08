// Messi is a soccer player with goals in three leagues:

// LaLiga
// Copa del Rey
// Champions
// Complete the function to return his total number of goals in all three leagues.

// my original solution

public class Goals {
    public static int goals(int laLigaGoals, int copaDelReyGoals, int championsLeagueGoals) {
        return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
    }
}

// what I learned from others' solutions

import java.util.Arrays; // pull in Array methods

public class Goals {
    public static int goals(int... array) { // like spread syntax, <dataType>...variable
        return Arrays.stream(array).sum(); // pass array to the Arrays.stream() method and use sum() method to return a
                                           // total
    }
}
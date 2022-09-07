// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// my original solution

public class Counter {
    public int countSheeps(Boolean[] arrayOfSheeps) {
        int count = 0;
        for (int i = 0; i < arrayOfSheeps.length; i++) {
            if (arrayOfSheeps[i] == null || arrayOfSheeps[i] == false) {
                continue;
            }
            count++;
        }
        return count;
    }
}

// what I learned from others' solutions

public class Counter {
    public int countSheeps(Boolean[] arrayOfSheeps) {
        int count = 0;
        for (Boolean present : arrayOfSheeps) { // works kind of like a for of loop in JS - declare type, give a name for each instance in array, :, and array to loop
            if (present != null && present) { // check to see if NOT null and if true to increment
                count++;
            }
        }
        return count;
    }
}
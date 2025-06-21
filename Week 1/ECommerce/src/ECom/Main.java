package ECom;

import java.util.*;

public class Main {
    public static void main(String[] args) {
        Product[] products = {
            new Product(101, "Laptop", "Electronics"),
            new Product(102, "Mouse", "Accessories"),
            new Product(103, "Keyboard", "Accessories"),
            new Product(104, "Phone", "Electronics"),
        };

        Arrays.sort(products, Comparator.comparing(p -> p.productName.toLowerCase()));

        Product result1 = Search.linearSearch(products, "key");
        System.out.println("Linear Search: " + (result1 != null ? result1.productName : "Not Found"));

        Product result2 = Search.binarySearch(products, "Phone");
        System.out.println("Binary Search: " + (result2 != null ? result2.productName : "Not Found"));
    }
}

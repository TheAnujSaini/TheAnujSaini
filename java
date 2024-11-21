import java.util.Scanner;

public class EmployeeDetails {
    public static void main(String[] args) {
        // Create a Scanner object to read input
        Scanner scanner = new Scanner(System.in);

        // Prompt the user for input
        System.out.print("Enter employee name: ");
        String name = scanner.nextLine(); // Read the employee name (String)

        System.out.print("Enter employee ID: ");
        int id = scanner.nextInt(); // Read the employee ID (Integer)

        System.out.print("Enter employee age: ");
        int age = scanner.nextInt(); // Read the employee age (Integer)

        System.out.print("Enter employee salary: ");
        float salary = scanner.nextFloat(); // Read the employee salary (Float)

        // Display the inputted details
        System.out.println("\nEmployee Details:");
        System.out.println("Name: " + name);
        System.out.println("ID: " + id);
        System.out.println("Age: " + age);
        System.out.println("Salary: " + salary);

        // Close the scanner to prevent resource leaks
        scanner.close();
    }
}
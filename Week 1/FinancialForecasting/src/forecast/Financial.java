package forecast;
import java.util.Scanner;

public class Financial {
	public static double forecast(double current_value,double growth, int year) {
		if(year==0)
			return current_value;
		return forecast(current_value*(1+growth), growth, year-1);
	}
	public static void main(String[] args) {
		Scanner s = new Scanner(System.in);
		double current_value;
		double growth;
		int year;
		
		System.out.println("Current value");
		current_value=s.nextDouble();
		System.out.println("Growth rate");
		growth=s.nextDouble();
		System.out.println("Years");
		year=s.nextInt();
		
		double future = forecast(current_value, growth, year);
		System.out.printf("Predicted value is : %.2f",future);
		
		s.close();
	}
}
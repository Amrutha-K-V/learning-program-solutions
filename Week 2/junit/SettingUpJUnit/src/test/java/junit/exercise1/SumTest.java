package junit.exercise1;
import org.junit.Test;
import static org.junit.Assert.assertEquals;

public class SumTest {
	 @Test
	    public void testAdd() {
	        Sum calc = new Sum();
	        int result = calc.add(5, 3);
	        assertEquals(8, result);
	    }
}
